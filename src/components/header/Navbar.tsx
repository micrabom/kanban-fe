import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Working on</Typography>
            <Typography>Serpent</Typography>
        </ul>
    );
}

export function NavbarComponent() {
    const [openNav, setOpenNav] = useState(false);

    const handleToggleNav = () => {
        setOpenNav(!openNav);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth >= 960 && openNav) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [openNav]);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5"
                >
                    Material Tailwind
                </Typography>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={handleToggleNav}
                    aria-label={openNav ? "Close navigation" : "Open navigation"}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 " strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    );
}
