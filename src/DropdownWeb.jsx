import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownWeb() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrollToSection = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        const navbarHeight = 70

        if (targetSection) {
            const offset = navbarHeight; // Adjust this offset based on your design
            const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });

            setMenuOpen(false);
        }
    };

    return (
        <Menu as="div" className="relative inline-block text-left" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
            <div>
                <Menu.Button className="flex flex-row items-center font-poppins text-cyan-500">
                    Therapies
                    <ChevronDownIcon className=" text-cyan-500 h-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                show={menuOpen} // Use the show prop to conditionally render the menu
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-poppins ">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#occ"
                                    onClick={() => scrollToSection('occ')}
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Occupational Therapy
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#si"
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Sensory Integration Practice
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#physio"
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Physiotherapy
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#psycho"
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Psychology
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#snl"
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Speech and Language Therapy
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#diet"
                                    className={classNames(
                                        active ? 'bg-cyan-500 text-zinc-50' : 'text-cyan-500',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Dietetics
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
