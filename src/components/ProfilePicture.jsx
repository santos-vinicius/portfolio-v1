import React from 'react';
import { StyledPicture } from '../../styles/theme';

export default function ProfilePicture() {
  // import Image URL from GitHub profile
  const imageUrl = `https://github.com/santos-vinicius.png`;

  return <StyledPicture src={imageUrl} alt="Vinicius Santos" className="img" />;
}
