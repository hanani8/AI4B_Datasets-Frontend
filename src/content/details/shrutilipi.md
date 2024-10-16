---
title: Shrutilipi
---

### Text Transcripts Format

Download transcripts - [Link](https://indic-asr-public.objectstore.e2enetworks.net/shrutilipi/shrutilipi_fairseq.zip)

The transcripts and audio paths are provided in fairseq format, which can be directly used for training models using the fairseq library. It consists of 3 files –

`train.tsv` file – Each line in the file contains the relative path to an audio file and the number of frames in the audio separated by tabs. The file also contains a header which has the absolute path to the dataset.

`train.wrd` (word) file – each line contains the transcription for the audio file in the '.tsv' file which is corresponding to the same line number (ignoring the header in the '.tsv' file).

`train.ltr` (letter) file – Tokenized transcriptions for the corresponding sentences in 'wrd' file. (tokenized to characters)

### Audio Dataset Format

The audio files for each news bulletin are present in separate folders.
The audio files are stored in wav format sampled at 16KHz.
The audio filenames are numbered by sentence ids in the bulletin, eg. sent_1.wav.

The folder structure is as follows -

```
data
├── bengali
│   ├── <bulletin-1>
│   │   ├── sent_1.wav
│   │   ├── sent_2.wav
│   │   ├── ...
│   │   └── sent_n.txt
│   ├── <bulletin-2>
│   └── ...
├── gujarati
├── ...
```

## Citation

```
@misc{https://doi.org/10.48550/arxiv.2208.12666,
  doi = {10.48550/ARXIV.2208.12666},
  url = {https://arxiv.org/abs/2208.12666},
  author = {Bhogale, Kaushal Santosh and Raman, Abhigyan and Javed, Tahir and Doddapaneni, Sumanth and Kunchukuttan, Anoop and Kumar, Pratyush and Khapra, Mitesh M.},
  title = {Effectiveness of Mining Audio and Text Pairs from Public Data for Improving ASR Systems for Low-Resource Languages},
  publisher = {arXiv},
  year = {2022},
  copyright = {arXiv.org perpetual, non-exclusive license}
}
```

## Acknowledgements

We would like to thank the Ministry of Electronics and Information Technology (MeitY) of the Government of India and the Centre for Development of Advanced Computing (C-DAC), Pune for generously supporting this work and providing us access to multiple GPU nodes on the Param Siddhi Supercomputer. We would like to thank the EkStep Foundation and Nilekani Philanthropies for their generous grant which went into hiring human resources as well as cloud resources needed for this work. We would like to thank Megh Makhwana from Nvidia for helping in training Conformer-based ASR models. We would like to thank the EkStep Foundation for providing the Tarini dataset. We would like to thank Janki Nawale and Anupama Sujatha from AI4Bharat for helping in coordinating the annotation task, and extend thanks to all the annotators of AI4Bharat team.
