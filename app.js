// KI-Agenten Benchmark 2026 - App Logik

// Fallback-Daten (wenn API nicht erreichbar)
const fallbackData = {
    livebench: [
        { rank: 1, model: "Claude Fable 5.1 Max Effort", overall: 83.4, reasoning: 91.7, coding: 86.4, agentic: 66.1, math: 97.0, cost: "$1.212" },
        { rank: 2, model: "Claude 5.5 Opus Thinking Max Effort", overall: 83.2, reasoning: 92.2, coding: 89.3, agentic: 71.7, math: 97.1, cost: "$0.799" },
        { rank: 3, model: "Claude Fable 5 Max Effort", overall: 83.0, reasoning: 89.7, coding: 86.0, agentic: 62.2, math: 96.0, cost: "$1.439" },
        { rank: 4, model: "GPT-6 Astra Max Effort", overall: 82.2, reasoning: 92.7, coding: 80.4, agentic: 57.3, math: 96.8, cost: "$0.736" },
        { rank: 5, model: "GPT-6.1 Sol Max Effort", overall: 81.6, reasoning: 92.6, coding: 80.4, agentic: 54.5, math: 96.8, cost: "$0.142" },
        { rank: 6, model: "Muse Spark 1.3 xHigh Effort", overall: 81.6, reasoning: 89.7, coding: 81.1, agentic: 64.1, math: 95.9, cost: "$0.219" },
        { rank: 7, model: "DeepSeek V4.1 Flash Max Effort", overall: 81.1, reasoning: 86.7, coding: 80.0, agentic: 77.3, math: 93.3, cost: "$0.029" },
        { rank: 8, model: "GPT-5.6 Sol Max Effort", overall: 81.0, reasoning: 91.7, coding: 83.9, agentic: 56.2, math: 96.2, cost: "$0.515" },
        { rank: 9, model: "GPT-5.5 Thinking xHigh Effort", overall: 80.2, reasoning: 89.7, coding: 82.1, agentic: 54.0, math: 95.9, cost: "$0.435" },
        { rank: 10, model: "Claude 5 Opus Thinking Max Effort", overall: 80.1, reasoning: 91.2, coding: 81.4, agentic: 65.2, math: 95.7, cost: "$0.699" }
    ],
    swebench: [
        { rank: 1, agent: "live-SWE-agent + Claude 4.5 Opus", model: "Claude 4.5 Opus", score: "79.2%", source: "SWE-bench Leaderboard" },
        { rank: 2, agent: "Sonar Foundation Agent + Claude 4.5 Opus", model: "Claude 4.5 Opus", score: "79.2%", source: "SWE-bench Leaderboard" },
        { rank: 3, agent: "TRAE + Doubao-Seed-Code", model: "Doubao-Seed-Code", score: "78.8%", source: "SWE-bench Leaderboard" },
        { rank: 4, agent: "live-SWE-agent + Gemini 3 Pro Preview", model: "Gemini 3 Pro", score: "77.4%", source: "SWE-bench Leaderboard" },
        { rank: 5, agent: "Atlassian Rovo Dev", model: "Proprietary", score: "76.8%", source: "SWE-bench Leaderboard" }
    ],
    gaia: [
        { rank: 1, agent: "HAL Generalist Agent", model: "Claude Sonnet 4.5", overall: "74.6%", level1: "82.1%", level2: "72.7%", level3: "65.4%" },
        { rank: 2, agent: "HAL Generalist Agent", model: "Claude Sonnet 4.5 (High)", overall: "70.9%", level1: "77.4%", level2: "74.4%", level3: "46.2%" },
        { rank: 3, agent: "HAL Generalist Agent", model: "Claude Opus 4.1 (High)", overall: "68.5%", level1: "71.7%", level2: "70.9%", level3: "53.9%" },
        { rank: 4, agent: "HAL Generalist Agent", model: "Claude Opus 4 (High)", overall: "64.9%", level1: "71.7%", level2: "67.4%", level3: "42.3%" },
        { rank: 5, agent: "HAL Generalist Agent", model: "Claude 3.7 Sonnet (High)", overall: "64.2%", level1: "67.9%", level2: "64.0%", level3: "57.7%" }
    ],
    arena: [
        { rank: 1, model: "Claude Fable 5", elo: 1507, votes: 27013, vendor: "Anthropic" },
        { rank: 2, model: "Claude Opus 4.6 High", elo: 1504, votes: 72114, vendor: "Anthropic" },
        { rank: 3, model: "Claude Opus 4.7 High", elo: 1502, votes: 60125, vendor: "Anthropic" },
        { rank: 4, model: "Muse Spark 1.2 xHigh", elo: 1498, votes: 3245, vendor: "Meta" },
        { rank: 5, model: "Claude Opus 4.6", elo: 1497, votes: 76040, vendor: "Anthropic" },
        { rank: 6, model: "Claude Opus 4.7", elo: 1494, votes: 61248, vendor: "Anthropic" },
        { rank: 7, model: "Gemini 3.8 Flash High", elo: 1493, votes: 5137, vendor: "Google" },
        { rank: 8, model: "Claude Opus 5 High", elo: 1492, votes: 34718, vendor: "Anthropic" },
        { rank: 9, model: "Muse Spark 1.1", elo: 1491, votes: 23814, vendor: "Meta" },
        { rank: 10, model: "Gemini 3.7 Flash High", elo: 1490, votes: 5682, vendor: "Google" }
    ]
};

// Coding Agents Daten
const codingAgents = [
    {
        name: "Claude Code",
        vendor: "Anthropic",
        logo: "claude",
        score: "8.9/10",
        price: "$20/mo",
        description: "Terminal-native agent for plan/edit/run loops and deep multi-file refactors",
        features: ["Terminal-first", "Multi-file editing", "Subagents", "MCP Support", "1M context"]
    },
    {
        name: "Cursor",
        vendor: "Anysphere",
        logo: "cursor",
        score: "9.0/10",
        price: "$20/mo",
        description: "AI-native IDE with strong multi-file agent mode and codebase indexing",
        features: ["AI-native IDE", "Multi-model", "Cloud Agents", "Codebase indexing", "Free tier"]
    },
    {
        name: "GitHub Copilot",
        vendor: "GitHub/Microsoft",
        logo: "copilot",
        score: "8.4/10",
        price: "$10/mo",
        description: "Agentic coding inside GitHub + existing editors with PR/issue integration",
        features: ["GitHub-native", "Multi-model", "PR Review", "Cloud Agent", "Free tier"]
    },
    {
        name: "OpenAI Codex",
        vendor: "OpenAI",
        logo: "gpt",
        score: "8.5/10",
        price: "$0",
        description: "OpenAI coding agent across desktop, CLI, IDE and cloud execution",
        features: ["Cloud agents", "CLI", "IDE extension", "Free tier", "GPT-6 models"]
    },
    {
        name: "Windsurf",
        vendor: "Codeium",
        logo: "windsurf",
        score: "8.2/10",
        price: "$15/mo",
        description: "Smooth agent experience with Cascade agent and Fast Context",
        features: ["Cascade agent", "Fast Context", "Free tier", "Low cost", "Beginner-friendly"]
    },
    {
        name: "Devin",
        vendor: "Cognition",
        logo: "gpt",
        score: "8.2/10",
        price: "$20/mo",
        description: "Autonomous sandbox agent for ticket-to-PR workflows",
        features: ["Autonomous", "Sandbox", "Ticket-to-PR", "Multi-agent", "Enterprise"]
    }
];

// General Agents Daten
const generalAgents = [
    {
        name: "Claude Fable 5.1",
        vendor: "Anthropic",
        logo: "claude",
        score: "83.4%",
        price: "API",
        description: "Bestes Overall-Modell im LiveBench mit starkem Reasoning",
        features: ["Reasoning", "Coding", "Agentic", "Mathematik", "1M context"]
    },
    {
        name: "GPT-6 Astra",
        vendor: "OpenAI",
        logo: "gpt",
        score: "82.2%",
        price: "API",
        description: "OpenAI's stärkstes Modell für komplexe Aufgaben",
        features: ["Reasoning", "Coding", "Mathematik", "API", "Fast"]
    },
    {
        name: "Gemini 3.8 Flash",
        vendor: "Google",
        logo: "gemini",
        score: "78.8%",
        price: "API",
        description: "Google's schnellstes Modell mit guter Performance",
        features: ["Fast", "Multimodal", "API", "Cost-efficient", "Vision"]
    },
    {
        name: "DeepSeek V4.1 Flash",
        vendor: "DeepSeek",
        logo: "gpt",
        score: "81.1%",
        price: "API",
        description: "Bestes Preis-Leistungs-Verhältnis unter den Top-Modellen",
        features: ["Open Source", "Cost-efficient", "Agentic", "Reasoning", "Fast"]
    }
];

// Open Source Agents
const openAgents = [
    {
        name: "DeepSeek V4 Pro",
        vendor: "DeepSeek",
        logo: "gpt",
        score: "77.4%",
        price: "Open Source",
        description: "Stärkstes Open-Source-Modell im LiveBench",
        features: ["Open Source", "Reasoning", "Coding", "Self-hosted", "Cost-efficient"]
    },
    {
        name: "Qwen 3.8 Max",
        vendor: "Alibaba",
        logo: "gpt",
        score: "78.5%",
        price: "Open Source",
        description: "Alibaba's stärkstes Open-Source-Modell",
        features: ["Open Source", "Multilingual", "Reasoning", "Self-hosted", "API"]
    },
    {
        name: "GLM-5.3",
        vendor: "Zhipu AI",
        logo: "gpt",
        score: "76.1%",
        price: "Open Source",
        description: "Zhipu AI's Open-Source-Modell mit starkem Coding",
        features: ["Open Source", "Coding", "Chinese", "Self-hosted", "API"]
    },
    {
        name: "Llama 4.5 Maverick",
        vendor: "Meta",
        logo: "gpt",
        score: "72.0%",
        price: "Open Source",
        description: "Meta's Open-Source-Modell für allgemeine Aufgaben",
        features: ["Open Source", "Multimodal", "Self-hosted", "Community", "Fast"]
    }
];

// Coding Tools Daten
const codingTools = [
    {
        name: "Claude Code",
        vendor: "Anthropic",
        logo: "claude",
        price: "$20/mo",
        description: "Terminal-first autonomous engineering agent",
        features: ["Terminal", "Multi-file", "Subagents", "MCP", "1M context"]
    },
    {
        name: "Cursor",
        vendor: "Anysphere",
        logo: "cursor",
        price: "$20/mo",
        description: "AI-native editor with local and cloud agents",
        features: ["IDE", "Multi-model", "Cloud Agents", "Codebase indexing", "Free tier"]
    },
    {
        name: "GitHub Copilot",
        vendor: "GitHub",
        logo: "copilot",
        price: "$10/mo",
        description: "GitHub-native teams and broad IDE coverage",
        features: ["GitHub", "Multi-model", "PR Review", "Cloud Agent", "Free tier"]
    },
    {
        name: "OpenAI Codex",
        vendor: "OpenAI",
        logo: "gpt",
        price: "$0",
        description: "OpenAI/ChatGPT coding workflows across surfaces",
        features: ["Cloud", "CLI", "IDE", "Free tier", "GPT-6"]
    },
    {
        name: "Windsurf",
        vendor: "Codeium",
        logo: "windsurf",
        price: "$15/mo",
        description: "Smooth agents, low cost, beginner-friendly",
        features: ["Cascade", "Fast Context", "Free tier", "Low cost", "IDE"]
    },
    {
        name: "Devin",
        vendor: "Cognition",
        logo: "gpt",
        price: "$20/mo",
        description: "Multi-agent command-center workflows",
        features: ["Autonomous", "Sandbox", "Multi-agent", "Enterprise", "Ticket-to-PR"]
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderOverview();
    renderAgents();
    renderBenchmarks();
    renderCodingTools();
    loadLiveData();
    updateLastUpdate();
});

// Render Overview
function renderOverview() {
    const container = document.getElementById('overview-grid');
    const items = [
        { icon: "🏆", title: "Top Overall", subtitle: "LiveBench 2026", value: "83.4%", label: "Claude Fable 5.1" },
        { icon: "💻", title: "Top Coding", subtitle: "SWE-bench", value: "79.2%", label: "live-SWE-agent" },
        { icon: "🌐", title: "Top Arena", subtitle: "Chatbot Arena", value: "1507", label: "Claude Fable 5" },
        { icon: "🤖", title: "Top Agentic", subtitle: "GAIA Benchmark", value: "74.6%", label: "HAL Agent" },
        { icon: "💰", title: "Best Value", subtitle: "Preis-Leistung", value: "$0.029", label: "DeepSeek V4.1" },
        { icon: "🆓", title: "Best Free", subtitle: "Kostenlos", value: "$0", label: "OpenAI Codex" }
    ];

    container.innerHTML = items.map(item => `
        <div class="overview-card">
            <div class="overview-card-header">
                <div class="overview-icon">${item.icon}</div>
                <div>
                    <div class="overview-title">${item.title}</div>
                    <div class="overview-subtitle">${item.subtitle}</div>
                </div>
            </div>
            <div class="overview-stats">
                <div class="overview-stat">
                    <div class="overview-stat-value">${item.value}</div>
                    <div class="overview-stat-label">${item.label}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Agents
function renderAgents() {
    renderAgentGrid('coding-agents', codingAgents);
    renderAgentGrid('general-agents', generalAgents);
    renderAgentGrid('open-agents', openAgents);
}

function renderAgentGrid(containerId, agents) {
    const container = document.getElementById(containerId);
    container.innerHTML = agents.map(agent => `
        <div class="agent-card">
            <div class="agent-header">
                <div class="agent-logo ${agent.logo}">${agent.name.charAt(0)}</div>
                <div class="agent-info">
                    <h3>${agent.name}</h3>
                    <p>${agent.vendor}</p>
                </div>
            </div>
            <div class="agent-score">
                <span class="agent-score-value">${agent.score}</span>
                <span class="agent-score-label">${agent.price}</span>
            </div>
            <p style="color: var(--gray); font-size: 0.9rem;">${agent.description}</p>
            <div class="agent-features">
                ${agent.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Benchmarks
function renderBenchmarks() {
    renderLivebenchTable();
    renderSwebenchTable();
    renderGaiaTable();
    renderArenaTable();
}

function renderLivebenchTable() {
    const tbody = document.getElementById('livebench-table');
    tbody.innerHTML = fallbackData.livebench.map(item => `
        <tr>
            <td><span class="rank rank-${item.rank <= 3 ? item.rank : ''}">${item.rank}</span></td>
            <td><strong>${item.model}</strong></td>
            <td><span class="score-bar" style="width: ${item.overall * 0.8}px"></span>${item.overall}%</td>
            <td>${item.reasoning}%</td>
            <td>${item.coding}%</td>
            <td>${item.agentic}%</td>
            <td>${item.math}%</td>
            <td>${item.cost}</td>
        </tr>
    `).join('');
}

function renderSwebenchTable() {
    const tbody = document.getElementById('swebench-table');
    tbody.innerHTML = fallbackData.swebench.map(item => `
        <tr>
            <td><span class="rank rank-${item.rank <= 3 ? item.rank : ''}">${item.rank}</span></td>
            <td><strong>${item.agent}</strong></td>
            <td>${item.model}</td>
            <td><span class="score-bar" style="width: ${parseFloat(item.score) * 0.8}px"></span>${item.score}</td>
            <td>${item.source}</td>
        </tr>
    `).join('');
}

function renderGaiaTable() {
    const tbody = document.getElementById('gaia-table');
    tbody.innerHTML = fallbackData.gaia.map(item => `
        <tr>
            <td><span class="rank rank-${item.rank <= 3 ? item.rank : ''}">${item.rank}</span></td>
            <td><strong>${item.agent}</strong></td>
            <td>${item.model}</td>
            <td><span class="score-bar" style="width: ${parseFloat(item.overall) * 0.8}px"></span>${item.overall}</td>
            <td>${item.level1}</td>
            <td>${item.level2}</td>
            <td>${item.level3}</td>
        </tr>
    `).join('');
}

function renderArenaTable() {
    const tbody = document.getElementById('arena-table');
    tbody.innerHTML = fallbackData.arena.map(item => `
        <tr>
            <td><span class="rank rank-${item.rank <= 3 ? item.rank : ''}">${item.rank}</span></td>
            <td><strong>${item.model}</strong></td>
            <td>${item.elo}</td>
            <td>${item.votes.toLocaleString()}</td>
            <td>${item.vendor}</td>
        </tr>
    `).join('');
}

// Render Coding Tools
function renderCodingTools() {
    const container = document.getElementById('coding-grid');
    container.innerHTML = codingTools.map(tool => `
        <div class="coding-card">
            <div class="coding-header">
                <div class="coding-logo ${tool.logo}">${tool.name.charAt(0)}</div>
                <div class="coding-info">
                    <h3>${tool.name}</h3>
                    <p>${tool.vendor}</p>
                </div>
            </div>
            <div class="coding-price">
                <span class="coding-price-value">${tool.price}</span>
                <span class="coding-price-label">${tool.price === '$0' ? 'kostenlos' : '/Monat'}</span>
            </div>
            <p style="color: var(--gray); font-size: 0.9rem;">${tool.description}</p>
            <div class="coding-features">
                ${tool.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load Live Data
async function loadLiveData() {
    try {
        // Versuche Arena Leaderboard API zu laden
        const response = await fetch('https://api.wulong.dev/arena-ai-leaderboards/v1/leaderboard?name=text');
        if (response.ok) {
            const data = await response.json();
            renderArenaLive(data);
        } else {
            renderArenaLiveFallback();
        }
    } catch (error) {
        console.log('API nicht erreichbar, verwende Fallback-Daten');
        renderArenaLiveFallback();
    }

    // LiveBench Fallback
    renderLivebenchLive();
    // SWE-bench Fallback
    renderSwebenchLive();
}

function renderArenaLive(data) {
    const container = document.getElementById('arena-live');
    if (data && data.models) {
        container.innerHTML = data.models.slice(0, 10).map(model => `
            <div class="live-item">
                <span class="live-item-rank">#${model.rank}</span>
                <span class="live-item-name">${model.model}</span>
                <span class="live-item-score">${model.score || model.elo || '-'}</span>
            </div>
        `).join('');
    } else {
        renderArenaLiveFallback();
    }
}

function renderArenaLiveFallback() {
    const container = document.getElementById('arena-live');
    container.innerHTML = fallbackData.arena.slice(0, 10).map(item => `
        <div class="live-item">
            <span class="live-item-rank">#${item.rank}</span>
            <span class="live-item-name">${item.model}</span>
            <span class="live-item-score">${item.elo}</span>
        </div>
    `).join('');
}

function renderLivebenchLive() {
    const container = document.getElementById('livebench-live');
    container.innerHTML = fallbackData.livebench.slice(0, 10).map(item => `
        <div class="live-item">
            <span class="live-item-rank">#${item.rank}</span>
            <span class="live-item-name">${item.model}</span>
            <span class="live-item-score">${item.overall}%</span>
        </div>
    `).join('');
}

function renderSwebenchLive() {
    const container = document.getElementById('swebench-live');
    container.innerHTML = fallbackData.swebench.map(item => `
        <div class="live-item">
            <span class="live-item-rank">#${item.rank}</span>
            <span class="live-item-name">${item.agent}</span>
            <span class="live-item-score">${item.score}</span>
        </div>
    `).join('');
}

// Tab Wechsel
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    
    event.target.classList.add('active');
    document.getElementById('tab-' + tab).classList.remove('hidden');
}

function switchBenchmark(benchmark) {
    document.querySelectorAll('.benchmark-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.benchmark-content').forEach(content => content.classList.add('hidden'));
    
    event.target.classList.add('active');
    document.getElementById('benchmark-' + benchmark).classList.remove('hidden');
}

// Refresh Data
function refreshData() {
    const btn = document.querySelector('.refresh-btn');
    btn.innerHTML = '<span class="refresh-icon">⏳</span> Lade...';
    
    setTimeout(() => {
        loadLiveData();
        updateLastUpdate();
        btn.innerHTML = '<span class="refresh-icon">↻</span> Aktualisieren';
    }, 1000);
}

// Update Last Update Time
function updateLastUpdate() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('last-update').textContent = now.toLocaleDateString('de-DE', options);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
