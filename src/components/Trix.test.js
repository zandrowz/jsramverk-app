import { render, screen, fireEvent } from '@testing-library/react';
import Editor from './Trix';

test('renders "create new" button', () => {
    render(<Editor />);
    const button = screen.getByRole("button", {name: "Create new"});
    expect(button).toBeInTheDocument();
});

test('renders "save" button when "create new" button pressed', () => {
    render(<Editor />);
    const button = screen.getByRole("button", {name: "Create new"});
    fireEvent.click(button);
    const saveButton = screen.getByRole("button", {name: "Save"});
    expect(saveButton).toBeInTheDocument();
});

test('renders "select option"', () => {
    render(<Editor />);
    const selectOpt = screen.getByRole("option");
    expect(selectOpt).toBeInTheDocument();
});

test('renders the title input field', () => {
    render(<Editor />);
    const labelText = screen.getByLabelText("Enter a title:");
    expect(labelText).toBeInTheDocument();
});
