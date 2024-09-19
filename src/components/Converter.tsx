// src/components/Converter.tsx
import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const Converter: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState<string>('meter');
  const [toUnit, setToUnit] = useState<string>('kilometer');
  const [result, setResult] = useState<number | null>(null);

  const conversionRates: { [key: string]: number } = {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    mile: 0.000621371,
    yard: 1.09361,
    foot: 3.28084,
    inch: 39.3701,
  };

  const handleConvert = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];
    const convertedValue = (value * toRate) / fromRate;
    setResult(convertedValue);
  };

  return (
    <div>
      <IonItem>
        <IonLabel position="stacked">Value</IonLabel>
        <IonInput type="number" value={value} onIonChange={e => setValue(parseFloat(e.detail.value!))}></IonInput>
      </IonItem>

      <IonItem>
        <IonLabel>From</IonLabel>
        <IonSelect value={fromUnit} placeholder="Select One" onIonChange={e => setFromUnit(e.detail.value!)}>
          {Object.keys(conversionRates).map(unit => (
            <IonSelectOption key={unit} value={unit}>
              {unit}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>To</IonLabel>
        <IonSelect value={toUnit} placeholder="Select One" onIonChange={e => setToUnit(e.detail.value!)}>
          {Object.keys(conversionRates).map(unit => (
            <IonSelectOption key={unit} value={unit}>
              {unit}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>

      <IonButton expand="block" onClick={handleConvert}>
        Convert
      </IonButton>

      {result !== null && (
        <IonItem>
          <IonLabel>
            Result: {result} {toUnit}
          </IonLabel>
        </IonItem>
      )}
    </div>
  );
};

export default Converter;
