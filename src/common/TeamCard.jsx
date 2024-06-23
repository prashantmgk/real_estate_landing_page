/* eslint-disable react/prop-types */
import { MdCall } from 'react-icons/md';
import { LuArrowUpRight } from 'react-icons/lu';

const TeamCard = ({ member }) => {
   return (
      <div className="mb-4 shrink-0 text-center">
         <div className="team relative mb-4 h-80 shrink-0 overflow-hidden text-center">
            <a href={`tel:${member.contact}`} className="h-full w-full">
               <img
                  className="h-full w-full object-cover"
                  src={member.image}
                  alt="property"
               />
            </a>
            <div className="team-container h-full w-full">
               <main className="flex h-full w-full flex-col items-center justify-center">
                  <p className="font-nepali">सम्पर्क नुम्बर :</p>
                  <div className="mt-4 flex items-center gap-2">
                     <MdCall className="text-h4" />
                     <p className="fontlight font-nepali text-h5">
                        {member.samparka}
                     </p>
                  </div>
                  <LuArrowUpRight className="absolute right-4 top-4 text-h3" />
               </main>
            </div>
         </div>
         <h3 className="pt-8 font-nepali text-h5 font-semibold">
            {member.name}
         </h3>
         <p className="pt-2 font-nepali text-p font-medium tracking-wider">
            {member.role}
         </p>
      </div>
   );
};

export default TeamCard;
