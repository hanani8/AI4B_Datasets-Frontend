---
title: "Indic-Glue"
slug: Indic-Glue
---

### Dataset Summary

IndicGLUE is a natural language understanding benchmark for Indian languages. It contains a wide
variety of tasks and covers 11 major Indian languages - as, bn, gu, hi, kn, ml, mr, or, pa, ta, te.
The Winograd Schema Challenge (Levesque et al., 2011) is a reading comprehension task
in which a system must read a sentence with a pronoun and select the referent of that pronoun from
a list of choices. The examples are manually constructed to foil simple statistical methods: Each
one is contingent on contextual information provided by a single word or phrase in the sentence.
To convert the problem into sentence pair classification, we construct sentence pairs by replacing
the ambiguous pronoun with each possible referent. The task is to predict if the sentence with the
pronoun substituted is entailed by the original sentence. We use a small evaluation set consisting of
new examples derived from fiction books that was shared privately by the authors of the original
corpus. While the included training set is balanced between two classes, the test set is imbalanced
between them (65% not entailment). Also, due to a data quirk, the development set is adversarial:
hypotheses are sometimes shared between training and development examples, so if a model memorizes the
training examples, they will predict the wrong label on corresponding development set
example. As with QNLI, each example is evaluated separately, so there is not a systematic correspondence
between a model's score on this task and its score on the unconverted original task. We
call converted dataset WNLI (Winograd NLI). This dataset is translated and publicly released for 3
Indian languages by AI4Bharat.

### Citation Information

```
@inproceedings{kakwani-etal-2020-indicnlpsuite,
    title = "{I}ndic{NLPS}uite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for {I}ndian Languages",
    author = "Kakwani, Divyanshu  and
      Kunchukuttan, Anoop  and
      Golla, Satish  and
      N.C., Gokul  and
      Bhattacharyya, Avik  and
      Khapra, Mitesh M.  and
      Kumar, Pratyush",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2020",
    month = nov,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2020.findings-emnlp.445",
    doi = "10.18653/v1/2020.findings-emnlp.445",
    pages = "4948--4961",
}
@inproceedings{Levesque2011TheWS,
title={The Winograd Schema Challenge},
author={H. Levesque and E. Davis and L. Morgenstern},
booktitle={KR},
year={2011}
}
```
