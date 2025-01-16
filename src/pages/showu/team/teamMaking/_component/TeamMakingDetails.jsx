import React from 'react';
import S from './style';
import TeamMakingName from './TeamMakingName';
import TeamMakingProfile from './TeamMakingProfile';
import TeamMakingDate from './TeamMakingDate';
import TeamMakingMember from './TeamMakingMember';
import TeamMakingSkill from './TeamMakingSkill';
import TeamMakeAnnouncement from './TeamMakeAnnouncement';
import { Link } from 'react-router-dom';

const TeamMakingDetails = () => {
    return (
        <div className='TeamMakingDetailsWrapper' >
                <TeamMakingName />

            {/* <TeamMakingProfile /> */}

            {/* <TeamMakingDate /> */}

            {/* <TeamMakingMember /> */}

            {/* <TeamMakingSkill /> */}

            {/* <TeamMakeAnnouncement /> */}
        </div>
    );
};

export default TeamMakingDetails;