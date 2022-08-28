// NavBar component is derived from Tailwind UI library (https://tailwindui.com/)

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ConfigurationFetch from "../../lib/ConfigurationFetch.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@mui/material';

const navigation = [
  { name: 'Home', href: '/', current: false, external: false },
  { name: 'Services', href: '/services', current: false, disabled: false },
  { name: 'Hosting', href: 'https://volteric.com', current: false, disabled: false, external: true }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

export default function Nav() {
  const route = useLocation();
  const [bannerStatus, setBannerStatus] = useState(false);

  useEffect(() => {
    (async () => {
      const Configuration = await ConfigurationFetch();
        if (Configuration.development === false) setBannerStatus(false);
        else setBannerStatus(true);
        
        return;
    })();
  }, [route]);

  
  return (
    <div>
      {
        bannerStatus &&
        <div className="bg-red-500 text-center font-BreezeHeader py-6 px-32 hidden sm:block">
          <h1 className="font-BreezeText text-2xl">Development mode is <b>enabled</b>. Make sure to configure <code>public/config/config.json</code> in the project directory. When you're done, set <code>development</code> in the configuration to false.<br /><br /><b>Happy coding!</b></h1>
        </div>
      }
      <Disclosure as="nav" id="nav-top" className="">
        {({ open }) => (
          <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-12">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <a href="/" className={`text-white text-xl font-BreezeHeader font-bold`}><img alt="Hydrabank wave logo" width="65px" src="/assets/img/HydrabankWave.png" /></a>
                    </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.disabled ? "#disabled" : item.href}
                              rel="noreferrer noopener"
                              target={item.external ? "_blank" : null}
                              className={classNames(
                                (item.href === route.pathname) ? 'text-white font-bold' : `text-gray-200 hover:text-white font-medium`,
                                'px-3 py-2 rounded-md text-sm font-BreezeText NavLink'
                              )}
                              style={item.disabled ? { cursor: "not-allowed", color: "#78909c" } : {}}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                              {item.external && <FontAwesomeIcon icon={faExternalLink} className="ml-2" />}
                            </a>
                          ))}
                        </div>
                    </div>
                  </div>
                  
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Tooltip title={<span className="font-BreezeText font-bold">Hydralink Status</span>}>
                    <a
                      type="button"
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://status.hydrabank.systems"
                      className=" p-1 rounded-full text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <FontAwesomeIcon icon={faGlobe} size="xl" />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>


            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.disabled ? "#" : item.href}
                    rel="noreferrer noopener"
                    target={item.external ? "_blank" : null}
                    className={classNames(
                      item.current ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-900 hover:text-white',
                      'block px-3 py-2 rounded-md text-base text-center font-medium font-BreezeText'
                    )}
                    style={item.disabled ? { cursor: "not-allowed", textDecoration: "line-through" } : {}}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {item.external && <FontAwesomeIcon icon={faExternalLink} className="ml-2" />}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
