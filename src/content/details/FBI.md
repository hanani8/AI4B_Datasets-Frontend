---
title: "FBI"
slug: FBI
---

## Tasks

We manually categorized each prompt into one of the 4 task categories:

- **Long Form Writing (LF)**: These prompts require generating long pieces of text and explore generic topics, often including detailed analysis and storytelling. For example, _How can I improve my time management skills?_
- **Factual (F)**: These prompts seek objective information or facts. For example, _What is the primary function of a capacitor in an electrical circuit?_
- **Instruction Following (IF)**: These prompts require executing specific steps or guidelines to achieve a particular outcome or answer. For example, _Write a poem with **four** lines and the following words: peace, sky, race, ground._
- **Reasoning (R)**: These prompts necessitate the application of logic, mathematics, and critical thinking to analyze information and draw conclusions. For example, _A bat and a ball together cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost?_

## How to use from the Datasets library

```
from datasets import load_dataset

ds = load_dataset("ai4bharat/FBI", "factual")
```

```
from datasets import load_dataset

ds = load_dataset("ai4bharat/FBI", "instruction-following")
```

```
from datasets import load_dataset

ds = load_dataset("ai4bharat/FBI", "long-form")
```

## Citation

If you used this repository or our models, please cite our work:

```bibtex
@article{doddapaneni2024finding,
  title   = {Finding Blind Spots in Evaluator LLMs with Interpretable Checklists},
  author  = {Sumanth Doddapaneni and Mohammed Safi Ur Rahman Khan and Sshubam Verma and Mitesh M. Khapra},
  year    = {2024},
  journal = {arXiv preprint arXiv: 2406.13439}
}
```

```
@misc{
    to be updated
} -->
```
