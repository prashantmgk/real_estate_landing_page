import React, { useState } from 'react'
import { Stack, Modal, Button, NativeSelect, Group, TextInput, Textarea, NumberInput, Checkbox, SimpleGrid, Image, FileInput, Overlay, Loader } from '@mantine/core';
import { MdAdd, MdDelete } from "react-icons/md";
import { useDisclosure } from '@mantine/hooks';
import { ImageDropzone } from '../../common/ImageDropzone';
import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

import { Facility, PropertyFormValues, PositionType } from '../../types/types';
import LocationMap from '../../common/map/LocationMap';
import { db } from '../../auth/BaseConfig';
import { addDoc, getDocs, collection } from 'firebase/firestore';

import { uploadImages, uploadVideo } from '../../utils/utils';

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

const Create = () => {
   const [openedFacility, { open: openFacility, close: closeFacility }] = useDisclosure(false);

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

   const [files, setFiles] = useState<FileWithPath[]>([]);
   const [isLoading, setIsLoading] = useState(false);

   const [position, setPosition] = useState<PositionType>();

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

   const form = useForm({
      initialValues: {
         title: '',
         description: '',
         propertyType: 'घर (House)',
         transactionType: 'बिक्री (Buy)',
         address: '',
         district: 'Kaski (कास्की)',
         area: 'कित्ता (Sq. ft.)',
         measurement: '',
         priceInNumber: '',
         priceInWords: '',
         priceNegotiable: 'फिक्स (Fix)',
         facilities: [],
         furnishing: 'फर्निस (Furnished)',
         faceTowards: 'पूर्व (East)',
         buildingType: "फ्लैट सिस्टम (Flat System)",
         floors: '',
         beds: '',
         kitchen: '',
         living: '',
         bath: '',
         email: '',
         phone: '',
         video: null,
      },

      validate: {
         title: (value) => value.length < 5 && 'Title must be at least 5 characters long',
         description: (value) => value.length < 10 && 'Description must be at least 10 characters long',
         propertyType: (value) => !value && 'Property Type is required',
         transactionType: (value) => !value && 'Transaction Type is required',
         address: (value) => value.length < 5 && 'Address must be at least 5 characters long',
         district: (value) => !value && 'District is required',
         area: (value) => !value && 'Area is required',
         measurement: (value) => !(Number(value) > 0) && 'Measurement must be a positive number',
         priceInNumber: (value) => !(Number(value) > 0) && 'Price must be a positive number',
         priceInWords: (value) => value.length < 5 && 'Price in words must be at least 5 characters long',
         priceNegotiable: (value) => !value && 'Price Negotiable is required',
         facilities: (value) => value.length < 1 && 'At least one facility is required',
         furnishing: (value) => !value && 'Furnishing is required',
         faceTowards: (value) => !value && 'Faced Towards is required',
         buildingType: (value) => !value && 'Building Type is required',
         floors: (value) => !(Number(value) > 0) && 'Floors must be a positive number',
         beds: (value) => !(Number(value) > 0) && 'Beds must be a positive number',
         kitchen: (value) => !(Number(value) > 0) && 'Kitchen must be a positive number',
         living: (value) => !(Number(value) > 0) && 'Living must be a positive number',
         bath: (value) => !(Number(value) > 0) && 'Bath must be a positive number',
         email: (value) => !value && 'Email is required',
         phone: (value) => !value && 'Phone is required',
         video: (value) => !value && 'At least one image is required',
      }
   });

   const handleCreateProperty = async (values: any) => {

      if (files.length <= 0) {
         notifications.show({
            position: 'top-right',
            title: 'At least one image is required',
            color: 'orange',
            message: 'Please upload at least one image for the property.',

         })
         return;
      }

      if (!position?.address) {
         notifications.show({
            position: 'top-right',
            title: 'Please select a location',
            color: 'orange',
            message: 'The location of the property is required. Please select a location on the map.',

         })
         return;
      }

      setIsLoading(true);

      const imageResponse = await uploadImages(files);
      console.log(imageResponse, " Image Created");

      const videoResponse = await uploadVideo(values.video);
      console.log(videoResponse, " Video Created");

      const docValues: PropertyFormValues = {
         address: values?.address,
         area: values?.area,
         bath: values?.bath,
         beds: values?.beds,
         buildingType: values?.buildingType,
         description: values?.description,
         district: values?.district,
         email: values?.email,
         facilities: values?.facilities,
         faceTowards: values?.faceTowards,
         floors: values?.floors,
         furnishing: values?.furnishing,
         images: imageResponse,
         kitchen: values?.kitchen,
         location: {
            lat: position?.lat,
            lng: position?.lng,
         },
         measurement: values?.measurement,
         phone: values?.phone,
         priceInNumber: values?.priceInNumber,
         priceInWords: values?.priceInWords,
         priceNegotiable: values?.priceNegotiable === 'फिक्स (Fix)' ? false : true,
         propertyType: values?.propertyType,
         title: values?.title,
         transactionType: values?.transactionType,
         videos: videoResponse,
         living: values?.living
      }

      const docResponse = async () => {
         try {
            const doc = await addDoc(collection(db, 'properties'), docValues);
            return doc;
         } catch (error) {
            console.log(error);
            return error;
         }
      }

      docResponse().then((doc) => {

         notifications.show({
            position: 'top-right',
            title: 'New Property Created',
            color: 'green',
            message: 'A new property has been created successfully. You can view it in the properties page.',

         })
         setIsLoading(false);

      }).catch((error) => {

         notifications.show({
            position: 'top-right',
            title: 'Error',
            color: 'red',
            message: 'An error occured while creating the property. Please try again later.',
         })
         setIsLoading(false);

      }).finally(() => {
         form.reset();
         setFiles([]);
      })
   }

   return (
      <>
         {
            isLoading && (
               <div className='fixed top-0 left-0 w-full h-full z-[10000]'>
                  <Overlay color="#fff" backgroundOpacity={0.15} blur={2} className='flex justify-center items-center'>
                     <Loader color="blue" />
                  </Overlay>
               </div>
            )
         }
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

         <div className="lg:px-32 py-12 flex flex-col gap-4">
            <h1 className="text-h3 font-bold font-nepali">घर जग्गा बिक्री <span className='font-mono'>/</span> भाडामा</h1>
            <hr />
            <form
               onSubmit={form.onSubmit((values) => handleCreateProperty(values))}

               className='border-[1px] rounded-sm p-8 mt-4'>
               <Stack gap="lg" >
                  <TextInput
                     size='md'
                     withAsterisk
                     label="Title"
                     radius="xs"
                     placeholder="घर जग्गा बिक्री भाडामा"
                     key={form.key('title')}
                     {...form.getInputProps('title')}
                  />

                  <Textarea
                     withAsterisk
                     size='md'
                     label="Description"
                     placeholder="घर जग्गा बिक्री भाडामा"
                     autosize
                     minRows={8}
                     resize="vertical"
                     key={form.key('description')}
                     {...form.getInputProps('description')}
                  />

                  <div className="flex w-full gap-4">

                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Property Type"
                        data={['घर (House)', 'जग्गा (Land)', 'दुकान (Shop)', 'अन्य (Others)']}
                        key={form.key('propertyType')}
                        {...form.getInputProps('propertyType')}
                     />

                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Transaction Type"
                        data={['बिक्री (Buy)', 'भाडा (Rent)']}
                        key={form.key('transactionType')}
                        {...form.getInputProps('transactionType')}
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
                        key={form.key('address')}
                        {...form.getInputProps('address')}

                     />
                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="District"
                        data={districts}
                        key={form.key('district')}
                        {...form.getInputProps('district')}
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
                        key={form.key('area')}
                        {...form.getInputProps('area')}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Measurement"
                        key={form.key('measurement')}
                        rightSection={<div className='text-gray-400 pr-4'>{
                           form.errors.measurement && <div className='text-red-500'></div>
                        }</div>}
                        {...form.getInputProps('measurement')}
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
                        key={form.key('priceInNumber')}
                        {...form.getInputProps('priceInNumber')}
                     />
                     <TextInput
                        rightSection={<div className='text-gray-400'>रुपैयाँ</div>}
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Price in Words"
                        radius="xs"
                        placeholder="पाँच लाख"
                        key={form.key('priceInWords')}
                        {...form.getInputProps('priceInWords')}
                     />
                     <NativeSelect
                        className='w-1/2'
                        size='md'
                        withAsterisk
                        label="Price Negotiable"
                        data={['फिक्स (Fix)', 'वार्ता योग्य (Negotiable)']}
                        key={form.key('priceNegotiable')}
                        {...form.getInputProps('priceNegotiable')}
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
                        key={form.key('facilities')}
                        {...form.getInputProps('facilities')}
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
                        key={form.key('furnishing')}
                        {...form.getInputProps('furnishing')}
                     />
                     <NativeSelect
                        className='w-1/2'
                        label="Faced Towards"
                        size='md'
                        data={['पूर्व (East)', 'पश्चिम (West)', 'उत्तर (North)', 'दक्षिण (South)', 'उत्तर पूर्व (North East)', 'उत्तर पश्चिम (North West)', 'दक्षिण पूर्व (South East)', 'दक्षिण पश्चिम (South West)']}
                        key={form.key('faceTowards')}
                        {...form.getInputProps('faceTowards')}
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
                        key={form.key('buildingType')}
                        {...form.getInputProps('buildingType')}
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
                        key={form.key('floors')}
                        {...form.getInputProps('floors')}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Beds"
                        radius="xs"
                        key={form.key('beds')}
                        {...form.getInputProps('beds')}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Kitchen"
                        radius="xs"
                        key={form.key('kitchen')}
                        {...form.getInputProps('kitchen')}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Living"
                        radius="xs"
                        key={form.key('living')}
                        {...form.getInputProps('living')}
                     />
                     <NumberInput
                        className='w-1/2'
                        size='md'
                        label="Bath"
                        radius="xs"
                        key={form.key('bath')}
                        {...form.getInputProps('bath')}
                     />
                  </div>

                  <hr className='my-1' />

                  <h4 className='text-gray-400'>Image Gallery</h4>
                  <SimpleGrid cols={{ base: 1, sm: 4 }} mt={previews.length > 0 ? 'xl' : 0}>
                     {previews}
                  </SimpleGrid>
                  <ImageDropzone setFiles={setFiles} />

                  <h4 className='text-gray-400'>Property Video</h4>

                  <FileInput
                     accept='video/*'
                     size='lg'
                     clearable
                     label="Video"
                     placeholder="Upload a Video"
                     key={form.key('video')}
                     {...form.getInputProps('video')}
                  />

                  <h4 className='text-gray-400'>Location</h4>
                  <div>
                     <LocationMap setPosition={setPosition} />
                     <h3 className='font-semibold text-sm text-slate-500 inline-block' >Address :</h3> <span style={{ color: 'blue', fontStyle: 'italic', fontSize: '12px' }}>{position && (position as any)?.address || "Place the marker"} </span>
                  </div>

                  <TextInput
                     label="Email Address"
                     size='md'
                     placeholder="johndoe@email.com"
                     key={form.key('email')}
                     {...form.getInputProps('email')}
                  />

                  <TextInput
                     label="Phone Number"
                     size='md'
                     placeholder="98XX-XXX-XXX"
                     key={form.key('phone')}
                     {...form.getInputProps('phone')}
                  />
                  <Group justify="flex-end" mt="md">
                     <Button disabled={isLoading} type="submit" color='violet'>Submit</Button>
                  </Group>
               </Stack>
            </form >
         </div >
      </>
   )
}

export default Create