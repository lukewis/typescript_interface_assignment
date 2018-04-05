interface IBase {
    id: string;
}

interface IFoo extends IBase {
    method1(param1: string): void;
}

interface IBar<T> extends IBase {
    method1(param1: string, param2: T): void;
}

class Foo implements IFoo {
    public readonly id = "foo";

    public method1(param1: string): void {
    }
}

// The following line compiles with NO ERROR....but why??
const bar: IBar<boolean> = new Foo();