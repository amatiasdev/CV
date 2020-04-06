import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyled = styled.div`
	text-align : center;
`;
const AboutAvatar = styled.div`
	padding: 2em 0 0 0;
`;

const AboutImg= styled.img`
	border-radius:100%;
	widht:160px;
	height:160px;
	border:2px solid #E91E63;
	margin: 0 auto;
	display: block;
	box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;

const AboutName= styled.div`
	text-align: center;
`;

const AboutH2= styled.h2`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	letter-spacing:1.2px;
	margin: .5em 0 0 0;
	color: #c2185b;
`;
const AboutProfession=styled.div`
	margin:0.2em 0 1em 0;
	letter-spacing: 1.2px;
	font-weight:300;
	color: #c2185b;
`;
const AboutBio=styled.p`
	color: #757575;
	font-size:1em;
	font-weight:300;
`;
const AboutLocation=styled.p`
	color: #757575;
	font-size:1em;
	font-weight:300;
`;
const About=({avatar, name, profession, bio, address, social})=>(
	
	<AboutStyled>
		<div className="About-container">
			<AboutAvatar>
				<figure>
					<AboutImg src='https://scontent.fmex11-2.fna.fbcdn.net/v/t1.0-9/90357631_2979199482132468_2800566054223347712_n.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=gERTqyfUI6wAX87hKsf&_nc_ht=scontent.fmex11-2.fna&oh=07b572ed37ea6d0311d567414edc855f&oe=5E9D7C78' alt={name}/>
				</figure>
			</AboutAvatar>
			<AboutName>
				<AboutH2>{name}</AboutH2>
			</AboutName>
			<AboutProfession>
				<p>{profession}</p>
			</AboutProfession>
			<div className="About-desc">
				<AboutBio>{bio}</AboutBio>
			</div>
			<div className="About-location">
				<AboutLocation>{address}</AboutLocation>
			</div>
			<div className="About-social">
				<Social social={social}/>
			</div>
		</div>
	</AboutStyled>
);

export default About;