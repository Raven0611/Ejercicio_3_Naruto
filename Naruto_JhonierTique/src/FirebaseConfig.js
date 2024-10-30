import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrUmp7s0eJhqGql_pfUmqpiuo1euX5JhE",
  authDomain: "appweb-654f0.firebaseapp.com",
  projectId: "appweb-654f0",
  storageBucket: "appweb-654f0.appspot.com",
  messagingSenderId: "601838581683",
  appId: "1:601838581683:web:80b90204907a883dac3dc6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchCollectionData = async () => {
  const querySnapshot = await getDocs(collection(db, "Favorito_Naruto"));
  const dataList = querySnapshot.docs.map((doc) => doc.data());
  console.log(dataList);
  return dataList;
};

export const saveCharacterToFavorites = async (character) => {
  try {
    const characterData = {
      id: character.id,
      name: character.name,
      clan: character.personal.clan ? character.personal.clan : "null",
      gender: character.personal.sex ? character.personal.sex : "null",
      birthdate: character.personal.birthdate
        ? character.personal.birthdate
        : "null",
      image: character.images[0],
    };

    const docRef = await addDoc(
      collection(db, "Favorito_Naruto"),
      characterData
    );
    console.log("Personaje guardado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al guardar el personaje: ", error);
  }
};
