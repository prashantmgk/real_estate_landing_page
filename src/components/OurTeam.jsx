import TeamPhoto1 from '/images/team/team_1.jpg';
import TeamPhoto2 from '/images/team/team_2.jpg';
import TeamPhoto3 from '/images/team/team_3.jpg';
import TeamPhoto4 from '/images/team/team_4.jpg';

import TeamCard from '../common/TeamCard';

const team = {
   title: 'कार्यकर्ता',
   members: [
      {
         id: 1,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto3,
         contact: '+977-9857639529',
         samparka: '९८५७६३९५२९',
      },
      {
         id: 2,
         name: ' खिम बहादुर फकामी पुन',
         role: 'कार्यकारी निर्देशक',
         image: TeamPhoto1,
         contact: '+977-9863066196',
         samparka: '९८६३०६६१९६',
      },
      {
         id: 3,
         name: 'लोक बहादुर फगामी पुन',
         role: 'सचिव',
         image: TeamPhoto4,
         contact: '+977-9805847602',
         samparka: '९८०५८४७६०२',
      },
      {
         id: 4,
         name: 'किशोर प्रेम गर्बुजा',
         role: 'बरिष्ठ सल्लाहकार',
         image: TeamPhoto2,
         contact: '+977-9841234567',
         samparka: '९८५७६३९५२९',
      },
   ],
};
const OurTeam = () => {
   return (
      <section className="px-4 pb-20 lg:px-32">
         <h2 className="py-8 text-center font-nepali text-h3 font-bold tracking-tight lg:text-h2">
            {' '}
            {team.title}{' '}
         </h2>
         <div className="mt-8 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member) => (
               <TeamCard key={member.id} member={member} />
            ))}
         </div>
      </section>
   );
};

export default OurTeam;
