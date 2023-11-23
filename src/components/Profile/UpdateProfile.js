import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const UpdateProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);
  const { profileUpdateRedirect } = useSelector(
    state => state.profile
  )
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateProfile(name, email));
  };
  useEffect(() => {
    if (profileUpdateRedirect) {
      navigate('/profile');
    }
  }, [profileUpdateRedirect, navigate])
  console.log(profileUpdateRedirect)

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [loading, message, dispatch, error]);
  return (
    <Container minH={'90vh'} py={16}>
      <form onSubmit={handleSubmit}>
        <Heading
          textTransform={'uppercase'}
          children="Update Profile"
          my={16}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="yellow.500"
          />
          <Input
            required
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w="full"
            colorScheme="yellow"
            type="submit"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default UpdateProfile;
