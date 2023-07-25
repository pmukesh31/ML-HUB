import React from "react";
import Card from "./Components/Card";
import styles from "./App.module.css";
import Header from "./Components/Header";
import diab from "./img/diabetes.jpeg";
import spam from "./img/spam.png";
import textSum from "./img/textSum.png";
import cifar from "./img/Dogbreed.png";
import fake from "./img/fake.jpg";
import senti from "./img/sentiment.png";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container} styels>
        <Card
          image={diab}
          name="Classifier"
          description="Predict chance of diabetes based on three classifiers."
          href="https://github.com/Kundansaireddy/Diabeties-Prediction"
        />
        <Card
          image={spam}
          name="Spam filtering"
          description="Detect a Message to be spam or ham using NLP and classifier "
          href="https://github.com/Kundansaireddy/SpamDetector"
        />
        <Card
          image={textSum}
          name="Text Summarizer"
          description="Summarize a given article for increased readability."
          href="https://github.com/Kundansaireddy/TextSummarizer"
        />
        <Card
          image={cifar}
          name="Cifar 10 - Classifier"
          description="Image classifier using VGG16 on the CIFAR-10 dataset"
          href="https://github.com/Kundansaireddy/Cifar-10-Classifier"
        />
        <Card
          image={fake}
          name="Fake news Predictor"
          description="Based on the classification model and NLP detect fake news from real"
          href="https://github.com/Kundansaireddy/FakeNewsDetector"
        />
        <Card
          image={senti}
          name="Youtube Sentiment analysis"
          description="Based on the given link, segregate all the comments of a given video based on Sentiment"
          href=""
        />
      </div>
    </>
  );
};

export default App;
