import TeamPhoto from '../../public/images/team/team_1.jpg'
import TeamCard from '../common/TeamCard'

const team = {
   title: 'कार्यकर्ता',
   members: [
      {
         id: 1,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto
      },
      {
         id: 2,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto
      },
      {
         id: 3,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto
      },
      {
         id: 4,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto
      },
      {
         id: 5,
         name: 'ओम बाहादुर पुन',
         role: 'अध्यछे',
         image: TeamPhoto
      },
   ]
}
const OurTeam = () => {
  return (
      <section className="lg:px-32 pb-20">
         < h2 className = "text-center font-bold text-h2 font-nepali tracking-tight py-8" > {team.title} </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-center items-center">
            {team.members.map((member) => (
               <TeamCard key={member.id} member={member}/>
            ))}
         </div>
      </section>
  )
}

export default OurTeam