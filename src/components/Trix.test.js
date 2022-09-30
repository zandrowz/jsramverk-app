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

test('renders "select option', () => {
    render(<Editor />);
    const selectOpt = screen.getByRole("option");
    expect(selectOpt).toBeInTheDocument();
});

test('renders a specific label text', () => {
    render(<Editor />);
    const labelText = screen.getByLabelText("Enter a title:");
    expect(labelText).toBeInTheDocument();
  });

// test('renders a specific label text', () => {
//     const mockHandleClick = jest.fn();
//     render(<Editor onClick={mockHandleClick}/>);
//     const button = screen.getByRole("button", {name: "Create new"});
//     fireEvent.click(button);
//     expect(mockHandleClick).toHaveBeenCalledTimes(1);
//   });

// test('Renders without crashing ', () => {
//     render(<Editor />);
//     expect(screen.getByText(/Choose a document/i)).toBeInTheDocument();
//     expect(screen.getByText(/Test/i)).toBeInTheDocument();
// });

// test("User selects a document",  () => {
//     const fetchDoc = jest.fn();
//     const docs = [{
//         _id: '632ac6bd3147836191eda891',
//         title: "Test",
//         content: "Testar igen.."
//     }];

//     render(<Editor docs={docs} fetchDoc={fetchDoc} />);
//     fireEvent.click(screen.getByText("Choose a document"));
//     expect(screen.getByText(/Test/i));
// });

// test('check that "Create new" button calls the saveForm function on click', () => {
//     const mockHandleClick = jest.fn();
//     render(<Editor saveForm={mockHandleClick}/>);

//     const button = screen.getByRole("button", {name: "Create new"});

//     fireEvent.click(button);

//     expect(mockHandleClick).toHaveBeenCalledTimes(1);
//  });

// test('test dropdown', () => {
//     const onChange = jest.fn();
//     const docs = [{
//             "name": "Document 1",
//             "content": "Documentcontent 1"
//         },
//         {
//             "name": "Document 2",
//             "content": "Documentcontent 2"
//         }]
//     const { getAllByTestId } =     render(<DropDown docs={docs} onChange={fetchDoc}/>);
//     let options = getAllByTestId('select');
//     expect(options).toHaveLength(2);
// });