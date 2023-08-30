import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react';
import { RiDashboard2Fill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { LinkButton } from './LinkButton'

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const isAuthenticated = false;
    const user = {
        role: 'admin',
    }

    const logoutHandler = () => {
        onClose()
        console.log("Logout")
    }
    return (
        <>
            <ColorModeSwitcher />
            <Button
                onClick={onOpen}
                colorScheme={'yellow'}
                width={'12'}
                height={'12'}
                rounded={'full'}
                zIndex={'overlay'}
                position={"fixed"}
                top={6}
                left={6}
            >
                <RiMenu5Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(3px'} />
                <DrawerContent >
                    <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={"4"} alignItems={"flex-start"}>
                            <LinkButton onClose={onClose} url="/" title="Home" />
                            <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
                            <LinkButton onClose={onClose} url="/request" title="Request a Course" />
                            <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                            <LinkButton onClose={onClose} url="/about" title="About" />
                            <HStack
                                justifyContent={"space-evenly"}
                                position={"absolute"}
                                bottom={"2rem"}
                                width={"80%"}
                            >
                                {
                                    isAuthenticated ? (
                                        <>
                                            <VStack>
                                                <HStack>
                                                    <Link to="/profile" onClick={onClose}>
                                                        <Button colorScheme='yellow' variant={'ghost'}>Profile</Button>
                                                    </Link>
                                                    <Button variant={'ghost'} onClick={logoutHandler}>
                                                        <RiLogoutBoxLine />
                                                        Logout
                                                    </Button>
                                                </HStack>
                                                {
                                                    user && user?.role === "admin" && <Link to="/admin/dashboard" onClick={onClose}>
                                                        <Button colorScheme={'purple'} variant={"ghost"}>
                                                            <RiDashboard2Fill style={{ margin: "4px" }} />
                                                            Dashboard
                                                        </Button>
                                                    </Link>
                                                }
                                            </VStack>
                                        </>
                                    ) : <>
                                        <Link to="/login" onClick={onClose}>
                                            <Button colorScheme='yellow'>Login</Button>
                                        </Link>
                                        <p>OR</p>
                                        <Link to="/register" onClick={onClose}>
                                            <Button colorScheme='yellow'>SIgn Up</Button>
                                        </Link>
                                    </>
                                }
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header;