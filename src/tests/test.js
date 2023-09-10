import healthIndicator from '../app';

test.each([
    [{ name: 'Mar', health: 90 }, 'healthy'],
    [{ name: 'Mar', health: 45 }, 'wounded'],
    [{ name: 'Mar', health: 5 }, 'critical'],
])('testing health status for %p', (object, expected) => {
    const result = healthIndicator(object);
    expect(result).toBe(expected);
});