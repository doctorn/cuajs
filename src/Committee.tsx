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

const CommitteeMember: React.SFC<MemberDescriptor> =
  (descriptor: MemberDescriptor) => {
    return (
      <div className="CommitteeMember">
        <img className="CommitteeMember-photo" src={descriptor.photo}/>
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

export default CommitteeMember;
