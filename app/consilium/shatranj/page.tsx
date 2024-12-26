'use client';
import React, { useState } from 'react';
import supabase from '../../../utils/supabase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderContact, setLeaderContact] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderCollege, setLeaderCollege] = useState('');
  const [leaderCourse, setLeaderCourse] = useState('');
  const [member2Name, setMember2Name] = useState('');
  const [member2Contact, setMember2Contact] = useState('');
  const [member2Email, setMember2Email] = useState('');
  const [member2College, setMember2College] = useState('');
  const [member2Course, setMember2Course] = useState('');
  const [member3Name, setMember3Name] = useState('');
  const [member3Contact, setMember3Contact] = useState('');
  const [member3Email, setMember3Email] = useState('');
  const [member3College, setMember3College] = useState('');
  const [member3Course, setMember3Course] = useState('');
  const [member4Name, setMember4Name] = useState('');
  const [member4Contact, setMember4Contact] = useState('');
  const [member4Email, setMember4Email] = useState('');
  const [member4College, setMember4College] = useState('');
  const [member4Course, setMember4Course] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registrationData = {
      email,
      team_name: teamName,
      leader_name: leaderName,
      leader_contact: leaderContact,
      leader_email: leaderEmail,
      leader_college: leaderCollege,
      leader_course: leaderCourse,
      member2_name: member2Name,
      member2_contact: member2Contact,
      member2_email: member2Email,
      member2_college: member2College,
      member2_course: member2Course,
      member3_name: member3Name,
      member3_contact: member3Contact,
      member3_email: member3Email,
      member3_college: member3College,
      member3_course: member3Course,
      member4_name: member4Name,
      member4_contact: member4Contact,
      member4_email: member4Email,
      member4_college: member4College,
      member4_course: member4Course,
    };

    try 
    {
        const { error } = await supabase.from('shatranj').insert([registrationData]);

        if (error) 
        {
            console.error('Error saving data:', error.message);
            setMessage('Something went wrong. Please try again.');
        }

        else
        {
            setMessage('Registration successful!');
            setEmail('');
            setTeamName('');
            setLeaderName('');
            setLeaderContact('');
            setLeaderEmail('');
            setLeaderCollege('');
            setLeaderCourse('');
            setMember2Name('');
            setMember2Contact('');
            setMember2Email('');
            setMember2College('');
            setMember2Course('');
            setMember3Name('');
            setMember3Contact('');
            setMember3Email('');
            setMember3College('');
            setMember3Course('');
            setMember4Name('');
            setMember4Contact('');
            setMember4Email('');
            setMember4College('');
            setMember4Course('');
        }
    } 
    catch (err) 
    {
        console.error('Unexpected error:', err);
        setMessage('Unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Event Registration</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <h3>Team Details</h3>
        <input type="email" placeholder="Team Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />

        <h3>Leader Details</h3>
        <input type="text" placeholder="Leader's Name" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} required />
        <input type="text" placeholder="Leader's Contact" value={leaderContact} onChange={(e) => setLeaderContact(e.target.value)} required />
        <input type="email" placeholder="Leader's Email" value={leaderEmail} onChange={(e) => setLeaderEmail(e.target.value)} required />
        <input type="text" placeholder="Leader's College" value={leaderCollege} onChange={(e) => setLeaderCollege(e.target.value)} required />
        <input type="text" placeholder="Leader's Course" value={leaderCourse} onChange={(e) => setLeaderCourse(e.target.value)} required />

        <h3>Member 2 Details</h3>
        <input type="text" placeholder="Member 2's Name" value={member2Name} onChange={(e) => setMember2Name(e.target.value)} />
        <input type="text" placeholder="Member 2's Contact" value={member2Contact} onChange={(e) => setMember2Contact(e.target.value)} />
        <input type="email" placeholder="Member 2's Email" value={member2Email} onChange={(e) => setMember2Email(e.target.value)} />
        <input type="text" placeholder="Member 2's College" value={member2College} onChange={(e) => setMember2College(e.target.value)} />
        <input type="text" placeholder="Member 2's Course" value={member2Course} onChange={(e) => setMember2Course(e.target.value)} />

        <h3>Member 3 Details</h3>
        <input type="text" placeholder="Member 3's Name" value={member3Name} onChange={(e) => setMember3Name(e.target.value)} />
        <input type="text" placeholder="Member 3's Contact" value={member3Contact} onChange={(e) => setMember3Contact(e.target.value)} />
        <input type="email" placeholder="Member 3's Email" value={member3Email} onChange={(e) => setMember3Email(e.target.value)} />
        <input type="text" placeholder="Member 3's College" value={member3College} onChange={(e) => setMember3College(e.target.value)} />
        <input type="text" placeholder="Member 3's Course" value={member3Course} onChange={(e) => setMember3Course(e.target.value)} />

        <h3>Member 4 Details</h3>
        <input type="text" placeholder="Member 4's Name" value={member4Name} onChange={(e) => setMember4Name(e.target.value)} />
        <input type="text" placeholder="Member 4's Contact" value={member4Contact} onChange={(e) => setMember4Contact(e.target.value)} />
        <input type="email" placeholder="Member 4's Email" value={member4Email} onChange={(e) => setMember4Email(e.target.value)} />
        <input type="text" placeholder="Member 4's College" value={member4College} onChange={(e) => setMember4College(e.target.value)} />
        <input type="text" placeholder="Member 4's Course" value={member4Course} onChange={(e) => setMember4Course(e.target.value)} />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
