import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange: render CheckoutForm
    render(<CheckoutForm />);
    //Act: Get header
    const header = screen.getByText(/checkout form/i);
    //Assert: Header should be displayed
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //Arrange:
    render(<CheckoutForm />);
    //Act: 
        const firstNameInput = screen.getByLabelText(/first name:/i);
        userEvent.type(firstNameInput, "jenna");

        const lastNameInput = screen.getByLabelText(/last name:/i)
        userEvent.type(lastNameInput, "Anderson");

        const addressInput = screen.getByLabelText(/address:/i);
        userEvent.type(addressInput, "1234 test St.");

        const cityInput = screen.getByLabelText(/city:/i);
        userEvent.type(cityInput, "Test City");

        const stateInput = screen.getByLabelText(/state:/i);
        userEvent.type(stateInput, "CO");
 
        const zipInput = screen.getByLabelText(/zip/i);
        userEvent.type(zipInput, "12345");

        const checkoutBtn = screen.getByRole("button");
        userEvent.click(checkoutBtn);
    //Assert:

        const successMessage = screen.getByTestId("successMessage");
        expect(successMessage).toBeInTheDocument();

        const newFirstName = screen.queryByText(/jenna/i);
        expect(newFirstName).toBeInTheDocument();

        const newLastName = screen.queryByText(/anderson/i);
        expect(newLastName).toBeInTheDocument();

        const newAddress = screen.queryByText(/1234 test St./i);
        expect(newAddress).toBeInTheDocument();

        const newCity = screen.queryByText(/test city/i);
        expect(newCity).toBeInTheDocument();

        const newState = screen.queryByText(/co/i);
        expect(newState).toBeInTheDocument();

        const newZip = screen.queryByText(/12345/i);
        expect(newZip).toBeInTheDocument();

        
});
