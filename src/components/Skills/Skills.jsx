import { useState, useEffect } from 'react';
import styles from './Skills.module.css'; // Import CSS module for styling
import { getImageUrl } from '../../utils';
import skillsData from '../../data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={`${skill.title} Logo`}
              />
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
