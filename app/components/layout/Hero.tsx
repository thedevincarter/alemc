import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, .80) 0%, rgba(0, 0, 0, .70) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>We are a long-standing brotherhood of Police, Fire, Military and member sponsored, likeminded riders, who share in good times and helping our community.</Title>
        
        <Text className={classes.description} size="xl" mt="xl">
        We seek  to bring together men whose common interest is motorcycle riding, promoting good fellowship, and encouraging membership in the Allegiance LEMC.  We contribute to the community and its charitable interests by giving to those in need through charity events and community service activities. Our members promote motorcycle safety and the advancement of motorcycling, all while promoting a positive self-image and spreading good will.
        </Text>

        <Text className={classes.description} size="xl" mt="xl">
        The Allegiance LEMC, aka “ALEMC” is open to any male Police, Fire, Military and sponsored likeminded motorcycle rider who wants to be a part of a Brotherhood. The ALEMC will continue having the majority of its members LE officers as a club base.
        </Text>
      </Container>
    </div>
  );
}