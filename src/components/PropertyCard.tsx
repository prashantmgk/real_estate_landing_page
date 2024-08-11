import React from 'react';
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { PropertyExtended } from '../types/types';
import { Modal, Group, TextInput, Button, ModalContent } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { db } from '../auth/BaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteImages, deleteVideo } from '../utils/utils';

const OurPropertyCard = ({ property }: { property: PropertyExtended }) => {

   const [opened, { open, close }] = useDisclosure(false);
   const [isLoading, setIsLoading] = React.useState(false);

   const handleDelete = async () => {
      setIsLoading(true);
      await deleteImages(property.images);
      await deleteVideo(property.videos);
      const provertyDoc = doc(db, 'properties', property.id);
      const deleteResponse = await deleteDoc(provertyDoc);
      close();
      setIsLoading(false);
      window.location.reload();
   }

   return (
      <>
         <Modal
            centered
            className='h-40'
            opened={opened}
            onClose={close}
            title={<p className='text-xl font-semibold'>Are you sure, you want to delete</p>}
            overlayProps={{
               backgroundOpacity: 0.55,
               blur: 3,
            }}>
            <Group grow wrap="nowrap" className='pt-10 '>
               <Button h={48} color="blue" onClick={close}>Cancel</Button>
               <Button h={48} color='red' disabled={isLoading} onClick={() => handleDelete()}>Delete</Button>
            </Group>
         </Modal>

         <div className="border-2 border-slate-200 rounded-md overflow-hidden">
            <img src={property.images[0]} alt="property image" className="min-h-48 object-cover" />
            <div className="flex flex-col m-4 gap-4">
               <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-h6">
                     {property.title}
                  </h3>

                  {/* <h3 className="font-bold font-nepali text-nowrap "> */}
                  <h3 className="font-bold text-nowrap ">
                     Rs. {property.priceInNumber}
                  </h3>
               </div>
               <div className="facilities flex" style={{ overflow: 'scroll', scrollbarWidth: 'none' }}>
                  {
                     property.facilities.map((facility, index) => {
                        return (
                           <div key={`${facility} - ${index}`} className="rounded-xl bg-blue-200 px-4 py-1 mr-2 text-xs text-slate-700 whitespace-nowrap">
                              {facility}
                           </div>
                        )
                     })
                  }
               </div >
               <p className="text-xs text-slate-600 leading-5">{
                  property.description.length > 320 ?
                     property.description.substring(0, 320) + "..."
                     :
                     property.description
               }</p>


               <div className="flex gap-2 justify-end float-end">
                  <button onClick={() => {
                     open();
                  }} className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-red-400 text-white font-semibold">Delete <MdDeleteOutline /></button>
                  {/* <button className="px-4 py-2 border-2 rounded-md flex items-center gap-2 bg-blue-400 text-white font-semibold">Edit <MdOutlineModeEditOutline /></button> */}
               </div>

            </div >
         </div >
      </>
   );
}

export default OurPropertyCard;