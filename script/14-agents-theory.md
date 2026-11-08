# 14 · How an agent works

`step: agents-theory` · Part 1 · Theory · **0:27 → 0:30** (3 мин)

**На экране:** схема цикла question → model → tool → result; Google ADK: LlmAgent · FunctionTool · Runner.
**Только теория.** Руками — миссия 8 в конце части 2.

## Текст

**[0:27]** Today you will also build AI agents. So let's take the magic out of the word now.

An agent is three things: **a model, an instruction, and tools**. In a loop.

Look at the picture. *(вести пальцем по схеме)* A question comes in. The model reads it — and the model does not answer. It *asks*: "please run `rejected_orders` for me". Your code runs that function. The result — facts — goes back to the model. And the model either asks for another tool, or — when it has enough — it answers.

That's it. That is the loop.

**[0:28]** Two consequences. First: the model never touches your data. It cannot. It only sees what the tools return. Second: no tool, no facts. A model without tools can only guess.

**[0:29]** Today we use Google's Agent Development Kit — ADK. Three words from it: `LlmAgent` — the model plus the instruction. `FunctionTool` — a tool: a name, a description, and the code. `Runner` — the loop.

LangGraph, the OpenAI Agents SDK, the Claude Agent SDK — the words are different, the loop is the same.

You will build one yourself at the end of part two. Over your own spans.

## Переход
> That's the theory. From now on — your keyboard. Part two.
