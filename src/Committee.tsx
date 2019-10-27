import React from 'react';
import { Email } from '@material-ui/icons'
import './Committee.css';

export type MemberDescriptor = {
  role: string,
  name: string,
  email: string,
  subject: string,
  college: string,
  photo: string,
};

export type CommitteeDescriptor = {
  members: MemberDescriptor[],
  treasurer: {
    name: string,
  },
};

export const CommitteeMember: React.SFC<MemberDescriptor> =
  (descriptor: MemberDescriptor) => {
    return (
      <div className="CommitteeMember">
        <img
          className="CommitteeMember-photo"
          alt={descriptor.role}
          src={require('./assets/committee/' + descriptor.photo)}
        />
        <h4 className="CommitteeMember-role">{descriptor.role}</h4>
        <h3 className="CommitteeMember-name">{descriptor.name}</h3>
        <a className="CommitteeMember-email" href="mailto:{descriptor.email}">
          <Email className="Icon"/>
          {descriptor.email}
        </a>
        <p className="CommitteeMember-info">
          <span className="CommitteeMember-college">
            {descriptor.college}
          </span>, <span className="CommitteeMember-subject">
            {descriptor.subject}
          </span>
        </p>
      </div>
    );
  };

const Committee: React.SFC<CommitteeDescriptor> =
  ({ members, treasurer }) => {
    return ( 
      <>
        <div className="Committee">
          {members.map(member => <CommitteeMember {...member} />)}
        </div>
        <div className="SeniorTreasurer">
          <h4 className="CommitteeMember-role">Senior Treasurer</h4>
          <h3 className="CommitteeMember-name">{treasurer.name}</h3>
        </div>
      </>
    );
  };

export default Committee;
