/* eslint-disable react/prop-types */

const TeamCard = ({ member }) => {
   return (
      <div className="mb-4 shrink-0 text-center">
         <div className="overflow-hidden">
            <img
               className="team-image w-ful h-80 object-cover"
               src={member.image}
               alt={member.name}
            />
         </div>
         <h3 className="pt-8 font-nepali text-h4 font-semibold">
            {member.name}
         </h3>
         <p className="pt-2 font-nepali text-p font-medium tracking-wider">
            {member.role}
         </p>
      </div>
   );
};

export default TeamCard;
