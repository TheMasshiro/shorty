import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon';
import NavButton from './NavButton';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation();

    const openLink = (link) => {
        window.open(link, "_blank");
    }

    return (
        <Disclosure
            as="nav"
            className="fixed top-0 left-0 right-0 z-50 bg-gray-800/50 backdrop-blur-sm after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Icon name="menu" aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <Icon name="close" aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="flex shrink-0 items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                                    <Icon name="link" className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white font-bold text-lg hidden sm:block">Shorty</span>
                            </div>
                        </Link>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => {
                                    const isCurrent = location.pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            aria-current={isCurrent ? 'page' : undefined}
                                            className={classNames(
                                                isCurrent ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <NavButton
                            onClick={() => openLink("https://github.com/themasshiro/shorty")}>
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Github</span>
                            <Icon name="github" aria-hidden="true" className="size-6" />
                        </NavButton>

                        <NavButton
                            onClick={() => openLink("https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science")}>
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">CS50x</span>
                            <Icon name="edx" aria-hidden="true" className="size-6" />
                        </NavButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => {
                        const isCurrent = location.pathname === item.href;
                        return (
                            <DisclosureButton
                                key={item.name}
                                as={Link}
                                to={item.href}
                                aria-current={isCurrent ? 'page' : undefined}
                                className={classNames(
                                    isCurrent ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        );
                    })}
                    <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-start gap-2">
                        <button
                            onClick={() => openLink("https://github.com/themasshiro/shorty")}
                            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md px-3 py-2 text-base font-medium transition-colors"
                        >
                            <Icon name="github" className="size-5" />
                            <span>GitHub</span>
                        </button>
                        <button
                            onClick={() => openLink("https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science")}
                            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md px-3 py-2 text-base font-medium transition-colors"
                        >
                            <Icon name="edx" className="size-5" />
                            <span>CS50x</span>
                        </button>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure >
    )
}
