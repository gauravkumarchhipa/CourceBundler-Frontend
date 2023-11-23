import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { changePassword } from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };
  const { loading, message, error, profileUpdateRedirect } = useSelector(state => state.profile);

  useEffect(() => {
    if (profileUpdateRedirect) {
      navigate('/profile');
    }
  }, [profileUpdateRedirect, navigate])

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
          children="Change Password"
          my={16}
          textAlign={['center', 'left']}
        />
        <VStack spacing={8}>
          <Input
            required
            id="oldPassword"
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
            focusBorderColor="yellow.500"
          />

          <Input
            required
            id="newPassword"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            w="full"
            colorScheme="yellow"
            type="submit"
          >
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
