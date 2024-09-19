import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Converter from '../components/Converter';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Metric Converter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Converter />
      </IonContent>
    </IonPage>
  );
};

export default Home;
