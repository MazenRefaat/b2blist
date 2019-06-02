import React from 'react';

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion';
import ItemCheckBox from '../item-checkbox/item.checkbox';


const B2BAccordion = (props) => {
    return (
        <Accordion allowZeroExpanded={true}>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <span className="font-sans font-size-15 font-weight-bold">
                            {props.topping.name}
                        </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {
                        props.topping.options.map((option, key)=> {
                            return (<ItemCheckBox isChecked={option.selected} onSelect={(event, option)=>props.onOptionCheck(option)} option={option}  optionKey={key} key={key} />);
                        })
                    }
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default B2BAccordion;