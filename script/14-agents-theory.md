# 14 · How an agent works

`step: agents-theory` · Part 1 · Theory · **0:27 → 0:30** (3–4 мин)

**На экране:** схема цикла question → model → tool → result; Google ADK: LlmAgent · FunctionTool · Runner.
**Только теория.** Руками — миссия 8 в конце части 2.
**Главное:** агент = модель + инструкция + инструменты, в цикле. Почему ADK — три причины: команда агентов, инструменты как обычные функции, модель меняется одной строкой.
**Не называть** обзервер и APM-агент — говорить «later today».

## Текст

**[0:27]** Today you will also build AI agents. So let's take the magic out of the word now.

An agent is three things: **a model, an instruction, and tools**. In a loop.

Look at the picture. *(вести пальцем по схеме)* A question comes in. The model reads it — and the model does not answer. It *asks*: "please run `rejected_orders` for me". Your code runs that function. The result — facts — goes back to the model. And the model either asks for another tool, or — when it has enough — it answers.

That's it. That is the loop.

**[0:28]** Two consequences. First: the model never touches your data. It cannot. It only sees what the tools return. Second: no tool, no facts. A model without tools can only guess.

**[0:29]** You could write this loop yourself — it's a while loop around an API call. So why a framework? Today we use Google's Agent Development Kit — ADK — for three reasons.

**One: a team, not one agent.** Later today, one agent will not be enough. One agent coordinates; specialists dig — one into latency, one into errors, one into traffic. In ADK an agent can be a tool of another agent. The coordinator *asks* a specialist exactly the way it asks a function. The same loop, one level up.

**Two: tools are plain functions.** If you know MCP — the Model Context Protocol — a tool there is a name, a description, a schema, and code in a separate server process. Here it is the same contract — but in your own process. No separate server to run. A `FunctionTool` is a name, a description the model reads, a schema for the arguments — ADK checks them before your code runs — and an ordinary JavaScript function. And if your tools already live in an MCP server, ADK connects to that too.

**[0:30]** **Three: the model is one line.** ADK talks to Gemini out of the box. But the model is swappable: Kitana — a router to your Claude or ChatGPT subscription, a local Ollama, or any API key. Or a mock: no key, no network, the same loop. That's how every one of you will run mission eight — with no account at all.

Three words to remember from ADK. `LlmAgent` — the model plus the instruction. `FunctionTool` — a tool. `Runner` — the loop.

LangGraph, the OpenAI Agents SDK, the Claude Agent SDK — the words are different, the loop is the same.

You will build one yourself at the end of part two. Over your own spans.

## Переход
> That's the theory. From now on — your keyboard. Part two.
