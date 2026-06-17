function titleCase(value) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function generateIdeas(keyword, tone, seed) {
  const cleanKeyword = keyword.trim() || tone;
  const words = cleanKeyword.split(/\s+/).filter(Boolean);
  const source = seed.length ? seed : ["Bright", "Swift", "Blue Harbor"];
  const results = [];

  for (let i = 0; i < 8; i += 1) {
    const prefix = titleCase(words[i % words.length] || tone);
    const base = source[i % source.length];
    const value =
      i % 4 === 0
        ? prefix + " " + base
        : i % 4 === 1
          ? base + " " + prefix
          : i % 4 === 2
            ? prefix + base.replace(/\s+/g, "")
            : base.replace(/\s+/g, "") + prefix;
    results.push(value);
  }

  return [...new Set(results)];
}

function renderResults(list, ideas) {
  list.innerHTML = "";
  ideas.forEach((idea) => {
    const item = document.createElement("li");
    item.className = "result-item";
    const text = document.createElement("span");
    text.textContent = idea;
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.textContent = "Copy";
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(idea);
        button.textContent = "Copied";
        button.classList.add("copied");
        window.setTimeout(() => {
          button.textContent = "Copy";
          button.classList.remove("copied");
        }, 1200);
      } catch (error) {
        button.textContent = "Saved";
      }
    });
    const saveButton = document.createElement("button");
    saveButton.className = "copy-button save-button";
    saveButton.type = "button";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
      const tool = list.id.replace("results-", "");
      const shortlist = document.getElementById("shortlist-" + tool);
      if (!shortlist) return;
      const existing = Array.from(shortlist.querySelectorAll("span")).map((node) => node.textContent);
      if (existing.includes(idea)) return;
      const saved = document.createElement("li");
      saved.className = "shortlist-item";
      const savedText = document.createElement("span");
      savedText.textContent = idea;
      const remove = document.createElement("button");
      remove.className = "copy-button";
      remove.type = "button";
      remove.textContent = "Remove";
      remove.addEventListener("click", () => saved.remove());
      saved.append(savedText, remove);
      shortlist.appendChild(saved);
    });
    const actions = document.createElement("div");
    actions.className = "result-actions";
    actions.append(saveButton, button);
    item.append(text, actions);
    list.appendChild(item);
  });
}

document.querySelectorAll(".generator-form").forEach((form) => {
  const results = document.getElementById("results-" + form.dataset.tool);
  const seed = JSON.parse(results.dataset.seed || "[]");
  renderResults(results, seed.slice(0, 8));
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderResults(results, generateIdeas(form.keyword.value, form.tone.value, seed));
  });
});

document.querySelectorAll(".prompt-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const form = chip.closest("main").querySelector(".generator-form");
    if (!form) return;
    form.keyword.value = chip.textContent;
    form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  });
});

document.querySelectorAll(".quick-fill").forEach((button) => {
  button.addEventListener("click", () => {
    const form = document.querySelector('.generator-form[data-tool="' + button.dataset.tool + '"]');
    if (!form) return;
    form.keyword.value = button.dataset.keyword || "";
    form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  });
});

document.querySelectorAll(".shuffle-button").forEach((button) => {
  button.addEventListener("click", () => {
    const form = document.querySelector('.generator-form[data-tool="' + button.dataset.tool + '"]');
    if (!form) return;
    form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  });
});

document.querySelectorAll(".copy-all-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const list = document.getElementById(button.dataset.target || "");
    if (!list) return;
    const text = Array.from(list.querySelectorAll(".result-item span"))
      .map((node) => node.textContent || "")
      .filter(Boolean)
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied all";
      window.setTimeout(() => {
        button.textContent = "Copy all";
      }, 1200);
    } catch (error) {
      button.textContent = "Saved";
    }
  });
});

document.querySelectorAll(".copy-shortlist-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const list = document.getElementById(button.dataset.target || "");
    if (!list) return;
    const text = Array.from(list.querySelectorAll(".shortlist-item span"))
      .map((node) => node.textContent || "")
      .filter(Boolean)
      .join("\n");
    if (!text) {
      button.textContent = "No ideas";
      window.setTimeout(() => {
        button.textContent = "Copy shortlist";
      }, 1200);
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      window.setTimeout(() => {
        button.textContent = "Copy shortlist";
      }, 1200);
    } catch (error) {
      button.textContent = "Saved";
    }
  });
});

document.querySelectorAll(".clear-shortlist-button").forEach((button) => {
  button.addEventListener("click", () => {
    const list = document.getElementById(button.dataset.target || "");
    if (!list) return;
    list.innerHTML = "";
  });
});

const toolSearch = document.getElementById("tool-search");
if (toolSearch) {
  const cards = Array.from(document.querySelectorAll(".tool-card"));
  toolSearch.addEventListener("input", () => {
    const keyword = toolSearch.value.trim().toLowerCase();
    cards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.classList.toggle("is-hidden", keyword && !text.includes(keyword));
    });
  });
}
