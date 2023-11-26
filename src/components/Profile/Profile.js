import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ChangePhotBox } from './ChangePhotBox';
import { useDispatch, useSelector } from 'react-redux';
import { removePlaylist, updateProfilePicture } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
const Profile = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.profile);
  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removePlaylist(id));
    dispatch(loadUser());
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [message, dispatch, error]);

  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };
  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={8}>
      <Heading children="Profile" m={8} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={8}
      >
        <VStack>
          <Avatar boxSize={'44'} src={user?.avatar?.url} />
          <Button onClick={onOpen} colorScheme="yellow" variant={'ghost'}>
            Change Profile Image
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user?.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user?.email} />
          </HStack>{' '}
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user?.CreatedAt.split('T')[0]} />
          </HStack>
          {user?.role !== 'admin' && (
            <HStack>
              <Text children={'Subscription'} fontWeight={'bold'} />
              {user?.subscription && user?.subscription?.status === 'active' ? (
                <Button color={'yellow.500'} variant={'unstyled'}>
                  Cancel subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children={'Playlist'} size={'md'} my={'8'} />
      {user?.playlist?.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={4}
        >
          {user?.playlist?.map(data => (
            <VStack w={48} key={data?.course}>
              <Image
                boxSize={'full'}
                objectFit={'contain'}
                src={data?.poster}
              />
              <HStack>
                <Link to={`/courses/${data?.course}`}>
                  <Button variant={'ghost'} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>
                <Button isLoading={loading} onClick={() => removeFromPlaylistHandler(data?.course)}>
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotBox
        isOpen={isOpen}
        onClose={onClose}
        changeImageSubmitHandler={changeImageSubmitHandler}
        loading={loading}
      />
    </Container>
  );
};
export default Profile;
