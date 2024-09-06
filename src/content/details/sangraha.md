---
title: Sangraha
---

# Sangraha

<p align="center">
  <img src="https://cdn-uploads.huggingface.co/production/uploads/63ef3cd11e695b35aa48bebc/nDnyidcqIOLAP9dTw9GrK.png" />
</p>

Sangraha is the largest high-quality, cleaned Indic language pretraining data containing 251B tokens summed up over 22 languages, extracted from curated sources, existing multilingual corpora and large scale translations.

**Coming Soon**:

- Sangraha Synthetic - Translated and Romanised English Wikimedia data.
- Sangraha Verified - Hindi YouTube transcribed data.

**More information**:

- For detailed information on the curation and cleaning process of Sangraha, please checkout our paper [on Arxiv](https://arxiv.org/abs/2403.06350);
- Check out the scraping and cleaning pipelines used to curate Sangraha [on GitHub](https://github.com/AI4Bharat/IndicLLMSuite);

## Getting Started

For downloading the entire Sangraha:

```python
from datasets import load_dataset

dataset = load_dataset("ai4bharat/sangraha")
```

For downloading a subset (Verified/Unverified) of Sangraha:

```python
from datasets import load_dataset

dataset = load_dataset("ai4bharat/sangraha", data_dir="<subset_name>")
# for example: dataset = load_dataset("ai4bharat/sangraha", data_dir="verified")
```

For downloading one language from a subset of Sangraha:

```python
from datasets import load_dataset

dataset = load_dataset("ai4bharat/sangraha", data_dir="<subset_name>/<lang_code>")
# for example: dataset = load_dataset("ai4bharat/sangraha", data_dir="verified/asm")
```

## Background

Sangraha contains three broad components:

- **Sangraha Verified**: Containing scraped data from "human-verified" Websites, OCR-extracted data from high quality Indic language PDFs, transcribed data from various Indic language videos, podcasts, movies, courses, etc.
- **Sangraha Unverfied**: High quality Indic language data extracted from existing multilingual corpora employing perplexity filtering using n-gram language models trained on Sangraha Verified.
- **Sangraha Synthetic**: WikiMedia English translated to 14 Indic languages and further "romanised" from 14 languages by transliteration to English.

## Data Statistics

| **Lang Code** | **Verified** | **Synthetic** | **Unverified** | **Total Tokens (in Millions)** |
| ------------- | ------------ | ------------- | -------------- | ------------------------------ |
| asm           | 292.1        | 11,696.4      | 17.5           | 12,006.0                       |
| ben           | 10,604.4     | 13,814.1      | 5,608.8        | 30,027.5                       |
| brx           | 1.5          | -             | -              | 1.5                            |
| doi           | 0.06         | -             | -              | 0.06                           |
| eng           | 12,759.9     | -             | -              | 12,759.9                       |
| gom           | 10.1         | -             | -              | 10.1                           |
| guj           | 3,647.9      | 12,934.5      | 597.0          | 17,179.4                       |
| hin           | 12,617.3     | 9,578.7       | 12,348.3       | 34,544.3                       |
| kan           | 1,778.3      | 12,087.4      | 388.8          | 14,254.5                       |
| kas           | 0.5          | -             | -              | 0.5                            |
| mai           | 14.6         | -             | -              | 14.6                           |
| mal           | 2,730.8      | 13,130.0      | 547.8          | 16,408.6                       |
| mar           | 2,827.0      | 10,816.7      | 652.1          | 14,295.8                       |
| mni           | 7.4          | -             | -              | 7.4                            |
| npi           | 1,822.5      | 10,588.7      | 485.5          | 12,896.7                       |
| ori           | 1,177.1      | 11,338.0      | 23.7           | 12,538.8                       |
| pan           | 1,075.3      | 9,969.6       | 136.9          | 11,181.8                       |
| san           | 1,329.0      | 13,553.5      | 9.8            | 14,892.3                       |
| sat           | 0.3          | -             | -              | 0.3                            |
| snd           | 258.2        | -             | -              | 258.2                          |
| tam           | 3,985.1      | 11,859.3      | 1,515.9        | 17,360.3                       |
| urd           | 3,658.1      | 9,415.8       | 1,328.2        | 14,402.1                       |
| tel           | 3,706.8      | 11,924.5      | 647.4          | 16,278.7                       |
| **Total**     | **64,306.1** | **162,707.9** | **24,307.7**   | **251,321.0**                  |

To cite Sangraha, please use:

```
@article{khan2024indicllmsuite,
  title   = {IndicLLMSuite: A Blueprint for Creating Pre-training and Fine-Tuning Datasets for Indian Languages},
  author  = {Mohammed Safi Ur Rahman Khan and Priyam Mehta and Ananth Sankar and Umashankar Kumaravelan and Sumanth Doddapaneni and Suriyaprasaad G and Varun Balan G and Sparsh Jain and Anoop Kunchukuttan and Pratyush Kumar and Raj Dabre and Mitesh M. Khapra},
  year    = {2024},
  journal = {arXiv preprint arXiv: 2403.06350}
}
```
