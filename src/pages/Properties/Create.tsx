import React, { useState } from 'react'
import { Stack, Modal, Button, NativeSelect, Group, TextInput, Textarea, NumberInput, Checkbox, SimpleGrid, Image } from '@mantine/core';
import { MdAdd, MdDelete } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { useDisclosure } from '@mantine/hooks';
import { ImageDropzone } from '../../common/ImageDropzone';
import { FileWithPath } from '@mantine/dropzone';

const districts = [
   "Kaski (कास्की)",
   "Kathmandu (काठमाडौं)",
   "Lalitpur (ललितपुर)",
   "Bhaktapur (भक्तपुर)",
   "Chitwan (चितवन)",
   "Gorkha (गोरखा)",
   "Ilam (इलाम)",
   "Baglung (बागलुङ)",
   "Mustang (मुस्ताङ)",
   "Palpa (पाल्पा)",
   "Achham (अछाम )",
   "Jhapa (झापा)",
   "Arghakhanchi (अर्घाखाँची)",
   "Baitadi (बैतडी)",
   "Bajhang (बझाङ)",
   "Bajura (बाजुरा)",
   "Banke (बाँके)",
   "Bara (बारा)",
   "Bardiya (बर्दिया)",
   "Bhojpur (भोजपुर)",
   "Dadeldhura (डडेलधुरा)",
   "Dailekh (दैलेख)",
   "Dang (दाङ)",
   "Nuwakot (नुवाकोट)",
   "Darchula (दार्चुला)",
   "Dhading (धादिङ)",
   "Parbat (पर्वत)",
   "Dhankuta (धनकुटा)",
   "Dhanusa (धनुषा)",
   "Dholkha (धोलखा)",
   "Dolpa (डोल्पा)",
   "Doti (डोटी)",
   "Gulmi (गुल्मी)",
   "Humla (हुम्ला)",
   "Jajarkot (जाजरकोट)",
   "Jumla (जुम्ला)",
   "Kailali (कैलाली)",
   "Kalikot (कालिकोट)",
   "Kanchanpur (कञ्चनपुर)",
   "Kapilvastu (कपिलवस्तु)",
   "Kavrepalanchok (काभ्रेपलाञ्चोक)",
   "Khotang (खोटाङ)",
   "Lamjung (लमजुङ)",
   "Mahottari (महोत्तरी)",
   "Makwanpur (मकवानपुर)",
   "Manang (मनाङ)",
   "Morang (मोरङ)",
   "Mugu (मुगु)",
   "Myagdi (म्याग्दी)",
   "Nawalparasi (नवलपरासी)",
   "Okhaldhunga (ओखलढुङ्गा)",
   "Panchthar (पाँचथर)",
   "Parsa (पर्सा)",
   "Pyuthan (प्युठान)",
   "Ramechhap (रामेछाप)",
   "Rasuwa (रसुवा)",
   "Rautahat (रौतहट)",
   "Rolpa (रोल्पा)",
   "Rukum (रुकुम)",
   "Rupandehi (रुपन्देही)",
   "Salyan (सल्यान)",
   "Sankhuwasabha (संखुवासभा)",
   "Saptari (सप्तरी)",
   "Sarlahi (सर्लाही)",
   "Sindhuli (सिन्धुली)",
   "Sindhupalchok (सिन्धुपाल्चोक)",
   "Siraha (सिराहा)",
   "Solukhumbu (सोलुखुम्बु)",
   "Sunsari (सुनसरी)",
   "Surkhet (सुर्खेत)",
   "Syangja (स्याङ्जा)",
   "Tanahu (तनहुँ)",
   "Taplejung (ताप्लेजुङ)",
   "Terhathum (तेह्रथुम)",
   "Udayapur (उदयपुर)"
]

type Facility = {
   id: number;
   name: string;
};



const Create = () => {
   const [openedFacility, { open: openFacility, close: closeFacility }] = useDisclosure(false);
   const [openedVideo, { open: openVideo, close: closeVideo }] = useDisclosure(false);

   const [facilites, setFacilites] = React.useState<Facility[]>([
      { id: 1, name: 'Parking' },
      { id: 2, name: 'Water Supply' },
      { id: 3, name: 'Electricity' },
      { id: 4, name: 'Internet' },
      { id: 5, name: 'CCTV' },
      { id: 6, name: 'Security Guard' },
      { id: 7, name: 'Garden' },
      { id: 8, name: 'Playground' },
      { id: 9, name: 'Swimming Pool' },
      { id: 10, name: 'Gym' },
      { id: 11, name: 'Solar' },
      { id: 12, name: 'Water Well' },
   ]);

   const [videoURL, setVideoURL] = useState<string[]>([""]);

   const [files, setFiles] = useState<FileWithPath[]>([]);

   const handleDeleteImage = (index: number) => {

      setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
   };


   const previews = files.map((file, index) => {
      const imageUrl = URL.createObjectURL(file);
      return (
         <div key={index} className='group relative ' >
            <button onClick={(e) => {
               e.preventDefault()
               handleDeleteImage(index)
            }} className='absolute right-2 top-2  rounded-full p-2 hidden group-hover:block bg-brand-300 text-white'><MdDelete /></button>
            <Image className='h-48' src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />
         </div>
      )
   });


   const handleAddMoreFacilities = (name: string) => {

      if (facilites.length >= 24) {
         return
      }
      setFacilites(prevState => {
         return [...prevState, { id: prevState.length + 1, name }]
      })
   }

   const handleAddVideoUrl = (url: string) => {
      if (videoURL.length >= 5) {
         //TODO: add a toaster message
         return
      }
      setVideoURL(prevState => {
         return [...prevState, url]
      })
   }

   const FacilitiesCheckboxes = ({ facilities }: { facilities: Facility[] }) => {
      const chunkSize = 5;
      const chunkedFacilities: Facility[][] = [];

      for (let i = 0; i < facilities.length; i += chunkSize) {
         chunkedFacilities.push(facilities.slice(i, i + chunkSize));
      }

      return (
         <>
            {
               chunkedFacilities.map((facilityChunk, index) => (
                  <Stack key={index}>
                     {facilityChunk.map(facility => (

                        <Checkbox key={facility.id} value={facility.name} label={facility.name} />

                     ))}
                  </Stack>
               ))
            }
         </>
      );
   };

   const VideoUrlInputs = ({ urls }: { urls: string[] }) => {

      const videos = urls.map((url, index) => {
         return (
            <div key={index} className='flex items-center w-full gap-2'>
               <TextInput
                  className='w-full'
                  key={index}
                  leftSection={<FaYoutube className='text-red-500 text-xl' />}
                  size='md'
                  label={`Video ${index + 1}`}
                  radius="xs"
                  value={url}
                  onChange={
                     (event) => {
                        const value = event.currentTarget.value;
                        if (value) {
                           setVideoURL((prevURLs) => prevURLs.map((url, i) => i === index ? value : url))
                        }
                        else {
                           setVideoURL((prevURLs) => prevURLs.filter((_, i) => i !== index))
                        }
                     }
                  }
                  placeholder="https://www.youtube.com/watch?v="
               />
               <Button className='mt-6' variant='default' size='xs' onClick={(e) => {
                  e.preventDefault()
                  setVideoURL((prevURLs) => prevURLs.filter((_, i) => i !== index))
               }}>
                  <MdDelete className='text-xl text-brand-100' />
               </Button>
            </div>
         )
      });

      return videos;
   }


   return (
      <>
         <Modal
            centered
            opened={openedFacility}
            onClose={closeFacility}
            title="Add Facility"
            overlayProps={{
               backgroundOpacity: 0.55,
               blur: 3,
            }}>
            <form
               onSubmit={(e) => {
                  e.preventDefault()
                  handleAddMoreFacilities(
                     (e.target as HTMLFormElement).querySelector('input')?.value || 'Facility'
                  )
                  closeFacility()

               }
               }>
               <Stack gap="lg">
                  <TextInput
                     size='md'
                     withAsterisk
                     label="Facility Name"
                     radius="xs"
                     placeholder="Parking"
                     required
                  />
                  <Button type='submit'>Submit</Button>
               </Stack>
            </form>
         </Modal>

         <Modal
            centered
            opened={openedVideo}
            onClose={closeVideo}
            title="Add Video URL"
            overlayProps={{
               backgroundOpacity: 0.55,
               blur: 3,
            }}>
            <form
               onSubmit={(e) => {
                  e.preventDefault()
                  handleAddVideoUrl(
                     (e.target as HTMLFormElement).querySelector('input')?.value || ''
                  )
                  closeVideo();
               }
               }>
               <Stack gap="lg">
                  <TextInput
                     size='md'
                     withAsterisk
                     label="Video URL"
                     radius="xs"
                     placeholder="https://www.youtube.com/watch?v="
                     required
                  />
                  <Button type='submit'>Submit</Button>
               </Stack>
            </form>
         </Modal>

         <div className="lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-h3 font-bold font-nepali">घर जग्गा बिक्री <span className='font-mono'>/</span> भाडामा</h1>
            <hr />
            {/* <div className='border-[1px] rounded-sm p-4'> */}
            {/* <form onSubmit={form.onSubmit((values) => console.log(values))}> */}
            <form className='border-[1px] rounded-sm p-8 mt-4'>
               <Stack gap="lg" >
                  <TextInput
                     size='md'
                     withAsterisk
                     label="Title"
                     radius="xs"
                     placeholder="घर जग्गा बिक्री भाडामा"

                  />

                  <Textarea
                     withAsterisk
                     size='md'
                     label="Description"
                     placeholder="घर जग्गा बिक्री भाडामा"
                     autosize
                     minRows={8}
                     resize="vertical"
                  />

                  <div className="flex w-full gap-4">

                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Property Type"
                        data={['घर (House)', 'जग्गा (Land)', 'दुकान (Shop)', 'अन्य (Others)']}
                     />

                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Transaction Type"
                        data={['बिक्री (Buy)', 'भाडा (Rent)']}
                     />
                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Location</h4>

                  <div className="flex w-full gap-4">
                     <TextInput
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Address"
                        radius="xs"
                        placeholder="घर जग्गा बिक्री भाडामा"

                     />
                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="District"
                        data={districts}
                     />
                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Land Area</h4>
                  <div className='flex w-full gap-4'>
                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Area"
                        data={['कित्ता (Sq. ft.)', 'रोपनी (Ropani)', 'आना (Aana)', 'बिघा (Bigha)', 'धुर (Dhur)', 'हात (Haath)', 'कठ्ठा (Kattha)']}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Ropani"
                     />

                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Aana"
                     />

                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Paisa"
                     />

                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Daam"
                     />

                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Price</h4>
                  <div className='flex w-full gap-4'>
                     <NumberInput
                        leftSection={<div className='text-gray-400'>रु</div>}
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Price in Number"
                        radius="xs"
                        placeholder="६००००"
                     />
                     <TextInput
                        rightSection={<div className='text-gray-400'>रुपैयाँ</div>}
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Price in Words"
                        radius="xs"
                        placeholder="पाँच लाख"
                     />
                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Price Negotiable"
                        data={['फिक्स (Fix)', 'वार्ता योग्य (Negotiable)']}
                     />
                  </div>
                  <hr className='my-1' />

                  <div className='flex justify-between'>
                     <h4 className='text-gray-400'>Facilities</h4>
                     <Button
                        size='xs'
                        variant='outline'
                        onClick={(e) => {
                           e.preventDefault()
                           openFacility()
                        }}>
                        <MdAdd className='text-xl' /> &nbsp;
                        Add Facility
                     </Button>
                  </div>
                  <div className='flex w-full gap-4'>
                     <Checkbox.Group
                        label="Facilites"
                        withAsterisk
                     >
                        <Group mt="xs" gap={120} >
                           <FacilitiesCheckboxes facilities={facilites} />
                        </Group>
                     </Checkbox.Group>
                  </div>

                  <div className='flex w-full gap-4'>
                     <NativeSelect
                        className='w-1/2'
                        label="Furnishing"
                        size='md'
                        data={['फर्निस (Furnished)', 'सेमि-फर्निस (Semi-Furnished)', 'अनफर्निस (Unfurnished)']}
                     />
                     <NativeSelect
                        className='w-1/2'
                        label="Faced Towards"
                        size='md'
                        data={['पूर्व (East)', 'पश्चिम (West)', 'उत्तर (North)', 'दक्षिण (South)', 'उत्तर पूर्व (North East)', 'उत्तर पश्चिम (North West)', 'दक्षिण पूर्व (South East)', 'दक्षिण पश्चिम (South West)']}
                     />

                     <NativeSelect
                        className='w-1/2'
                        label="Building Type"
                        size='md'
                        data={[
                           "फ्लैट सिस्टम (Flat System)",
                           "सिंगल फैमिली (Single Family)",
                           "कमर्शियल (Commercial)",
                           "सेमी कमर्शियल (Semi Commercial)",
                           "बंगला (Bungalow)",
                           "रेसिडेन्शियल (Residential)",
                           "हाउस इंडिभिजुअल (House Individual)",
                           "कॉलोनीमा घर (House in a colony)",
                           "अपार्टमेन्ट बिल्डिङ (Apartment Building)"
                        ]}
                     />
                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Floor & Rooms</h4>
                  <div className='flex w-full gap-4'>
                     <NumberInput
                        rightSection={<div className='text-gray-400 pr-4'>Stairs</div>}
                        className='w-1/2'
                        size='md'
                        label="Floors"
                        radius="xs"
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Beds"
                        radius="xs"
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Kitchen"
                        radius="xs"
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Living"
                        radius="xs"
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Bath"
                        radius="xs"
                     />
                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Image Gallery</h4>
                  <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                     {previews}
                  </SimpleGrid>
                  <ImageDropzone setFiles={setFiles} />

                  <div className='flex justify-between'>
                     <h4 className='text-gray-400'>YouTube Videos</h4>
                     <Button
                        size='xs'
                        variant='outline'
                        onClick={(e) => {
                           e.preventDefault()
                           openVideo()
                        }}>
                        <MdAdd className='text-xl' /> &nbsp;
                        Add Video URL
                     </Button>
                  </div>
                  <VideoUrlInputs urls={videoURL} />

                  <Group justify="flex-end" mt="md">
                     <Button type="submit">Submit</Button>
                  </Group>
               </Stack>
            </form >
         </div >
      </>
   )
}

export default Create