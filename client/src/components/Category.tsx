import { Accordion } from "flowbite-react";
import React from "react";

export default function Category() {
  return (
    <Accordion alwaysOpen={true} className="border-0 active:n">
      <Accordion.Panel>
        <Accordion.Title className="p-3">angilal</Accordion.Title>
        <Accordion.Content>
          <ul>
            <li>
              <a href=""> huvtas</a>
            </li>
            <li>
              <a href=""> gutal</a>
            </li>
            <li>
              <a href="">malgai</a>
            </li>
            <li>
              <a href=""> huvtas</a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="p-3">Huis</Accordion.Title>
        <Accordion.Content>
          <ul>
            <li>
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              <label htmlFor="vehicle3"> eregtei</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Boat"
              />
              <label htmlFor="vehicle2"> emegtei</label>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel className="border-b-2">
        <Accordion.Title className="p-3">Brand</Accordion.Title>
        <Accordion.Content>
          <ul>
            <li>nike</li>
            <li>adidas</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
