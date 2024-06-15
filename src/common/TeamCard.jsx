/* eslint-disable react/prop-types */

const TeamCard = ({member}) => {
  return (
    <div className="text-center mb-4 shrink-0">
      <div className="overflow-hidden">
        <img className="team-image w-ful h-96 object-cover hover:scale-110" src={member.image} alt={member.name} />
      </div>
      <h3 className="font-nepali font-semibold text-h4 pt-8">{member.name}</h3>
      <p className="font-nepali text-p font-light pt-2 tracking-wider">{member.role}</p>
    </div>
  )
}

export default TeamCard