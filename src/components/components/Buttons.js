import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonDropdown, DropdownToggle, ButtonToolbar, DropdownItem, DropdownMenu } from 'reactstrap';

const Example = (props) => {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    }
    return (
        <div className='main'>
            <div className='mainDiv'>
                <div>
                    <Button color="primary">primary</Button>{' '}
                    <Button color="secondary">secondary</Button>{' '}
                    <Button color="success">success</Button>{' '}
                    <Button color="info">info</Button>{' '}
                    <Button color="warning">warning</Button>{' '}
                    <Button color="danger">danger</Button>{' '}
                    <Button color="link">link</Button>
                </div>
                <div>
                    <Button outline color="primary">primary</Button>{' '}
                    <Button outline color="secondary">secondary</Button>{' '}
                    <Button outline color="success">success</Button>{' '}
                    <Button outline color="info">info</Button>{' '}
                    <Button outline color="warning">warning</Button>{' '}
                    <Button outline color="danger">danger</Button>
                </div>
                <div>
                    <Button color="primary" size="lg">Large Button</Button>{' '}
                    <Button color="secondary" size="lg">Large Button</Button>
                </div>
                <div>
                    <Button color="primary" size="sm">Small Button</Button>{' '}
                    <Button color="secondary" size="sm">Small Button</Button>
                </div>
                <div>
                    <Button color="primary" size="lg" block>Block level button</Button>
                    <Button color="secondary" size="lg" block>Block level button</Button>
                </div>
                <div>
                    <Button color="primary" size="lg" active>Primary link</Button>{' '}
                    <Button color="secondary" size="lg" active>Link</Button>
                </div>
                <div>
                    <h5>Radio Buttons</h5>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === 1}>One</Button>
                        <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === 2}>Two</Button>
                        <Button color="primary" onClick={() => setRSelected(3)} active={rSelected === 3}>Three</Button>
                    </ButtonGroup>
                    <p>Selected: {rSelected}</p>

                    <h5>Checkbox Buttons</h5>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>One</Button>
                        <Button color="primary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Two</Button>
                        <Button color="primary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Three</Button>
                    </ButtonGroup>
                    <p>Selected: {JSON.stringify(cSelected)}</p>
                </div>
                <div>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                            <Button>4</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>5</Button>
                            <Button>6</Button>
                            <Button>7</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>8</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div>
                    <ButtonGroup size="lg">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                    <ButtonGroup size="sm">
                        <Button>Left</Button>
                        <Button>Middle</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Dropdown Link</DropdownItem>
                                <DropdownItem>Dropdown Link</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup vertical>
                        <Button>1</Button>
                        <Button>2</Button>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Dropdown Link</DropdownItem>
                                <DropdownItem>Dropdown Link</DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}

export default Example;