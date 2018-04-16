import * as React from 'react';

interface Props {
  name: string;
  job: string;
}

const Profile: React.SFC<Props> = ({name, job}) => (
  <div>
    <h1>Profile</h1>
    <div>
      <b>Name: </b>
      {name}
    </div>
    <div>
      <b>Job: </b>
      {job}
    </div>
  </div>
);

export default Profile;