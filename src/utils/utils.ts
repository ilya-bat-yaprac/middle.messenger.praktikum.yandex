function serializeForm(formNode: any) {
    const { elements } = formNode

    Array.from(elements)
        .forEach((element) => {
            const { name, value }: any = element
            console.log({ name, value })
        })
}

export function handleFormSubmit({ event,  applicantForm}: any) {
    event.preventDefault()
    serializeForm(applicantForm.addEventListener('submit', handleFormSubmit))
}
