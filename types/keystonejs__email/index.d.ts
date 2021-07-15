// Type definitions for @keystonejs/email 5.0
// Project: https://github.com/keystonejs/keystone
// Definitions by: Kevin Brown <https://github.com/thekevinbrown>
//                 Timothee Clain <https://github.com/tclain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

// Because this is a scoped package, without this line Typescript doesn't associate the
// types with the right package.
// tslint:disable-next-line:no-single-declare-module
declare module '@keystonejs/email' {
    type Sender = (
        fileName: string
    ) => {
        send: (rendererOpts: any, transportOptions: any) => any;
    };
    interface MailSenderBuilder {
        mjml: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
        jsx: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
        pug: (opts?: { root?: string | undefined; transport?: string | undefined }) => Sender;
    }

    const emailSender: MailSenderBuilder;
}
