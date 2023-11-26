import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast';
import { resetPassword } from '../../redux/actions/profile';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const params = useParams();
    const dispatch = useDispatch();
    const { error, message, loading } = useSelector(state => state.profile);
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password))
        navigate('/login')
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message]);
    return (
        <Container py={16} minH={'95vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    children={'Reset Password'}
                    my="16"
                    textTransform={'uppercase'}
                    alignItems={['center', 'left']}
                />
                <VStack spacing={"8"}>
                    <Input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='New Password'
                        type='password'
                        focusBorderColor='yellow.500'
                        autoComplete='off'
                    />
                    <Button isLoading={loading} type='submit' w={'full'} colorScheme='yellow'>
                        Reset Password
                    </Button>
                </VStack>
            </form>
        </Container>
    )
}
export default ResetPassword