
import { firestore, storage } from './firebase';
import {useContext,createContext,useState,useEffect} from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, getDocs, setDoc, doc, deleteDoc } from 'firebase/firestore';


const PropertyContext = createContext();



export const PropertyProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const fetchProperties = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'property'));
      const propertiesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProperties(propertiesList);
    };
    const addProperty = async (property, images) => {
        const imageUrls = await Promise.all(
          [...images].map(async (image) => {
            const storageRef = ref(storage, `properties/${image.name}`);
            await uploadBytes(storageRef, image);
            return await getDownloadURL(storageRef);
          })
        );
    
        const propertyData = {
          ...property,
          images: imageUrls,
        };
    
        await setDoc(doc(firestore, 'property', 'Listed property'), propertyData);
    
        setProperties([...properties, { id: 'Listed property', ...propertyData }]);
      };
      const updateProperty = async (updatedProperty) => {
        const propertyDoc = doc(firestore, 'property', 'Listed property');
        await setDoc(propertyDoc, updatedProperty, { merge: true });
    
        setProperties(properties.map(prop => (prop.id === 'Listed property' ? { ...prop, ...updatedProperty } : prop)));
      };
    
      const deleteProperty = async () => {
        const propertyDoc = doc(firestore, 'property', 'Listed property');
        await deleteDoc(propertyDoc);
    
        setProperties(properties.filter(prop => prop.id !== 'Listed property'));
      };
    
      useEffect(() => {
        fetchProperties();
      }, []);    
  

  return (
    <PropertyContext.Provider value={{ properties, addProperty, updateProperty, deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};



export const useProperty = () => {
    return useContext(PropertyContext);
};
