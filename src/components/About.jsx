import React from 'react';

const About=({avatar, name, profession, bio, address, social})=>(
	
	<div className="About">
		<div className="About-container">
			<div className="About-avatar">
				<figure>
					<img src='https://scontent.fmex11-2.fna.fbcdn.net/v/t1.0-9/90357631_2979199482132468_2800566054223347712_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=gERTqyfUI6wAX87hKsf&_nc_ht=scontent.fmex11-2.fna&oh=07b572ed37ea6d0311d567414edc855f&oe=5E9D7C78' alt={name}/>
				</figure>
			</div>
			<div className="About-name">
				<h2>{name}</h2>
			</div>
			<div className="About-profession">
				<p>{profession}</p>
			</div>
			<div className="About-desc">
				<p>{bio}</p>
			</div>
			<div className="About-location">
				<p>{address}</p>
			</div>
			<div className="About-social">
				<p></p>
			</div>
		</div>
	</div>
);

export default About;