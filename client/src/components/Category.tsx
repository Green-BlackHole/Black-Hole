import { Accordion } from "flowbite-react";
import Link from "next/link";
import React from "react";

export default function Category() {
  return (
    <>
      <Accordion alwaysOpen={true} className="border-none">
        <Accordion.Panel>
          <Accordion.Title className="p-3 ">angilal</Accordion.Title>
          <Accordion.Content>
            <ul className="px-3">
              <li>
                <Link href="">huvtsas</Link>
              </li>
              <li>
                <Link href="">gutal</Link>
              </li>
              <li>
                <Link href="">omd</Link>
              </li>
              <li>
                <Link href="">tsamts</Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-3">..</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the
              <Link
                href="https://flowbite.com/figma/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Figma design system
              </Link>
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="p-3">...</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <Link
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Flowbite Pro
                </Link>
              </li>
              <li>
                <Link
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind UI
                </Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}
