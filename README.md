# Multi-Agent AI Hedge Fund System

This project simulates a hedge fund powered entirely by AI agents organized in a hierarchical structure, closely resembling a real-world financial organization.

At the core is a **CEO Agent**, responsible for making high-level buy/sell decisions. A network of **analyst agents ("employees")** operate under the CEO and independently investigate market data using tools connected to [Financial Datasets](https://www.financialdatasets.ai/). Each agent can explore real-world stock data, analyze trends, and summarize insights.

The CEO dynamically interacts with agents, requests deeper investigations, and gathers their reports before making final trading decisions.

---

## 🔧 Running the Agents

1. **Clone this repository** and navigate into the project folder.
2. Create a `.env` file in the root directory and add your keys:
   - `GITHUB_MODELS_TOKEN` → [Get it here]([https://platform.openai.com/chat-completions](https://github.com/marketplace/models/azure-openai/gpt-4-1-mini))
                              --> Go to "Use this model"
                              --> Get the developer key as given and use it for the token.
   - `FINANCIAL_DATASETS_API_KEY` → [Get it here](https://www.financialdatasets.ai/)
3. Install dependencies:
   ```bash
   yarn
4. Start the agent system:
    yarn start

